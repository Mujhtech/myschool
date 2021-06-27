<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/', function(){
	return response()->json([
		'message' => 'Api up and running',
		'status' => 'success'
	], 200);
});

Route::group(['prefix' => 'auth'], function(){
    Route::post('otp', 'API\AuthController@otp');
    Route::post('login', 'API\AuthController@login');
    Route::post('locked', 'API\AuthController@locked');
    Route::group(['middleware' => ['auth:api', 'locked']], function() {
        Route::get('logout', 'API\AuthController@logout');
        Route::get('profile', 'API\AuthController@profile');
    });
});

Route::resource('/setting', 'API\SettingController');

