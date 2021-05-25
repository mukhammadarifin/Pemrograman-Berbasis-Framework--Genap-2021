<?php
 
use Illuminate\Support\Facades\Route;

 
Route::get('/articles', 'App\Http\Controllers\ArticleController@index');
Route::post('/article/store', 'App\Http\Controllers\ArticleController@store');
Route::get('/article/edit/{id}', 'App\Http\Controllers\ArticleController@getArticle');
Route::get('/article/{id}', 'App\Http\Controllers\ArticleController@getArticle');
Route::put('/article/{id}', 'App\Http\Controllers\ArticleController@update');
Route::delete('/article/delete/{id}', 'App\Http\Controllers\ArticleController@delete');