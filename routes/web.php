<?php

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

Route::group(['prefix' => 'account'], function() {
	
	Route::get('verifyemail/{token}', ['uses' => 'AccountController@verify']);

	Route::get('dashboard', ['uses' => 'AccountController@dashboard']);

	Route::get('profile', ['uses' => 'AccountController@profile']);

	Route::get('signup', ['uses' => 'AccountController@signup']);

	Route::post('login', ['uses' => 'AccountController@login']);

	Route::post('update-profile', ['uses' => 'AccountController@updateProfile']);
	
	Route::post('update-wechat', ['uses' => 'AccountController@updateWechat']);
	
	Route::post('update-description', ['uses' => 'AccountController@updateDescription']);

	Route::get('signin', ['uses' => 'AccountController@signin']);

	Route::post('register', ['uses' => 'AccountController@register']);

	Route::get('signout', ['uses' => 'AccountController@signout']);
	
	// Route::get('edit/{insId}', ['uses' => 'InsController@edit']);
	// Route::get('/', ['uses' => 'InsController@index']);
});

Route::get('contact-us', 'IndexController@contactus');

Route::get('detail/{id}', 'IndexController@detail');

Route::get('/', 'IndexController@index');
