<?php
 
use Illuminate\Support\Facades\Route;
 
Route::view('/articles', 'app');
Route::view('/article/edit/{id}', 'app');
Route::view('/article/{id}', 'app');
Route::view('/', 'app');
Route::view('/{path}', 'app');