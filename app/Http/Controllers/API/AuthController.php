<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Auth;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request){
        $request->validate([
            'password' => 'required|string',
            'email' => 'required|string|email',
            'remember_me' => 'boolean'
        ]);

        if (!Auth::attempt(['email' => $request->email, 'password' => $request->password])){
            return response()->json([
                'message' => 'Invalid username/password',
                'status' => 401
            ], 401);
        }

        $user = $request->user();

        if ($user->role == 'administrator'){
            $tokenData = $user->createToken('Personal Access Token', ['administrator']);
        } else {
            $tokenData = $user->createToken('Personal Access Token', ['user']);
        }

        $token = $tokenData->token;

        if ($request->remember_me){
            $token->expires_at = Carbon::now()->addWeeks();
        }

        if ($token->save()){
            return response()->json([
                'user' => $user,
                'access_token' => $tokenData->accessToken,
                'token_type' => 'Bearer',
                'token_scope' => $tokenData->token->scope[0],
                'expires_at' => Carbon::parse($tokenData->token->expired_at)->toDayDateTimeString(),
                'status' => 200
            ], 200);
        } else {
            return response()->json([
                'message' => 'Some error occurred, try again',
                'status' => 500
            ], 500);
        }
    }

    public function logout(Request $request){
        $request->user()->tokens()->revoke();
        return response()->json([
            'message' => 'Logout successfully',
            'status' => 200
        ], 200);
    }

    public function profile(Request $request){
        if ($request->user()){
            return response()->json($request->user(), 200);
        } else {
            return response()->json([
                'message' => 'Not logged in',
                'status' => 500
            ], 500);
        }
    }

    public function locked(Request $request){
        $request->validate([
            'password' => 'required|string'
        ]);

        if ($request->user()){
            if(Hash::check($request->password, $request->user()->password)){
                $user = $request->user();
                $user->locked = 0;
                $user->save();
                return response()->json($request->user(), 200);
            } else {
                return response()->json([
                    'message' => 'Incorrect password',
                    'status' => 500
                ], 500);
            }
        } else {
            return response()->json([
                'message' => 'Not logged in',
                'status' => 500
            ], 500);
        }
    }


    public function otp(Request $request){
        $request->validate([
            'otp' => 'required|string'
        ]);

        if ($request->user()){
            if(Hash::check($request->otp, $request->user()->password)){
                $user = $request->user();
                $user->locked = 0;
                $user->save();
                return response()->json($request->user(), 200);
            } else {
                return response()->json([
                    'message' => 'Incorrect password',
                    'status' => 500
                ], 500);
            }
        } else {
            return response()->json([
                'message' => 'Not logged in',
                'status' => 500
            ], 500);
        }
    }
}
