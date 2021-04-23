<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class UserController extends Controller
{
    //

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }


    public function locked(Request $request)
    {

    	$user = $request->user();
    	$user->locked = 1;
    	if($user->save()) {
    		return redirect()->route('locked');
    	}
    }
}
