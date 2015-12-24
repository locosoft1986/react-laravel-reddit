<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/




/*
 * API Routes
 */

Route::post('/api/v1/checkIfEmailIsInUse', 'APIController@checkIfEmailIsInUse');
Route::post('/api/v1/checkIfUsernameIsInUse', 'APIController@checkIfUsernameIsInUse');


/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

Route::group(['middleware' => ['web']], function () {
  Route::get('/', function () {
      return view('index');
  });
  Route::get('/login', 'AuthenticateController@getLogin');

  Route::post('/api/v1/login', 'AuthenticateController@postLogin');

  Route::get('/register', 'AuthenticateController@getRegister');

  Route::post('/api/v1/register', 'AuthenticateController@postRegister');
  Route::get('/logout', 'AuthenticateController@getLogout');

  Route::get('/new/subreddit', 'SubredditController@newSubreddit');

  Route::get('/r/{subreddit}', 'SubredditController@showSubreddit');
});

Route::group(['middleware' => ['web', 'auth']], function() {
  Route::post('/api/v1/checkIfSubredditNameIsInUse', 'APIController@checkIfSubredditNameIsInUse');
  Route::post('/new/subreddit', 'SubredditController@createNewSubreddit');
});
