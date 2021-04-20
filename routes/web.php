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

Route::get('/login', function () {
    return view('auth.login');
})->name('login');

Route::middleware(['auth'])->group(function () {

    Route::get('/', function () {
        return view('page');
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
});
