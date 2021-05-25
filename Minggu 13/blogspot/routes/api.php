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

Route::get('/articles', 'App\Http\Controllers\ArticleController@index');
Route::post('/article/store', 'App\Http\Controllers\ArticleController@store');
Route::get('/article/edit/{id}', 'App\Http\Controllers\ArticleController@getArticle');
Route::get('/article/{id}', 'App\Http\Controllers\ArticleController@getArticle');
Route::put('/article/{id}', 'App\Http\Controllers\ArticleController@update');
Route::delete('/article/delete/{id}', 'App\Http\Controllers\ArticleController@delete');