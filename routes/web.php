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
Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');;



Route::group(['prefix' => 'auth'], function(){

    Route::get('/login', function () {
        return view('auth.login');
    })->name('auth.login');

    Route::get('/forgot-password', function () {
        return view('auth.forgot');
    })->name('auth.forgot');

});

Route::get('auth/locked', function () {
    return view('auth.locked');
})->middleware('auth')->name('auth.locked');

Route::middleware(['auth', 'locked'])->group(function () {

    Route::get('/home', function () {
        return view('pages.admin.index')->name('home');
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

Route::group(['prefix' => 'student', 'middleware' => ['auth', 'student', 'locked']], function(){

});

Route::group(['prefix' => 'teacher', 'middleware' => ['auth', 'teacher', 'locked']], function(){

});

Route::group(['prefix' => 'admin', 'middleware' => ['auth', 'admin', 'locked']], function(){

    Route::get('/setting', function () {
        return view('pages.admin.setting');
    })->name('admin.setting');

    Route::get('/profile', function () {
        return view('pages.admin.profile');
    })->name('admin.profile');

    Route::get('/manage-class', function () {
        return view('pages.admin.profile');
    })->name('admin.manage-class');

    Route::get('/manage-academic-session', function () {
        return view('pages.admin.profile');
    })->name('admin.manage-academic-session');


    Route::get('/manage-grade', function () {
        return view('pages.admin.profile');
    })->name('admin.manage-grade');


    Route::get('/manage-role', function () {
        return view('pages.admin.profile');
    })->name('admin.manage-role');

    Route::get('/manage-student', function () {
        return view('pages.admin.profile');
    })->name('admin.manage-student');

    Route::get('/messaging', function () {
        return view('pages.admin.messaging');
    })->name('admin.messaging');

});
