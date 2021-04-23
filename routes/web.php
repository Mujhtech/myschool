<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::group(['prefix' => 'auth'], function(){
    
    Route::get('/login', function () {
        return view('auth.login');
    })->name('auth.login');

    Route::get('/forgot-password', function () {
        return view('auth.forgot');
    })->name('auth.forgot');

    Route::get('/locked', function () {
        return view('auth.locked');
    })->name('auth.locked');

});

Route::middleware(['auth', 'locked'])->group(function () {

    Route::get('/', function () {
        return view('pages.admin.index');
    });
    Route::get('/profile', function () {
        return view('pages.profile');
    })->name('profile');

    Route::get('/class', function () {
        return view('pages.class');
    })->name('classes');

    Route::get('/settings', function () {
        return view('pages.settings');
    })->name('settings');

    Route::get('/roles', function () {
        return view('pages.role');
    })->name('roles');

    Route::get('logout', 'UserController@logout')->name('logout');
    Route::get('locked', 'UserController@locked')->name('locked');
});

Route::group(['prefix' => 'student', 'middleware' => ['locked', 'student']], function(){

});

Route::group(['prefix' => 'teacher', 'middleware' => ['locked', 'teacher']], function(){
    
});

Route::group(['prefix' => 'admin', 'middleware' => ['locked', 'admin']], function(){
    
});