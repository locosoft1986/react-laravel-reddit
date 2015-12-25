<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\User;
use App\Subreddit;

class APIController extends Controller
{
    public function checkIfEmailIsInUse(Request $request) {
      if (User::whereEmail($request->get('email'))->exists()) {
        return response()->json([
          "id" => "emailInUse",
          "error" => "That email is already in use"
        ]);
      } else {
        return 200;
      }
    }

    public function checkIfUsernameIsInUse(Request $request) {
      if (User::whereUsername($request->username)->exists()) {
        return response()->json([
          "id" => "usernameInUse",
          "error" => "That username is already in use"
        ]);
      } else {
        return 200;
      }
    }

    public function checkIfSubredditNameIsInUse(Request $request) {
      if (Subreddit::whereName($request->name)->exists()) {
        return response()->json([
          "id" => "subredditNameInUse",
          "error" => "Subreddit name is already taken"
        ]);
      } else {
        return 200;
      }
    }

    public function getListOfSubreddits() {
       $subreddits = Subreddit::all();
       $data = [];
       foreach ($subreddits as $subreddit) {
         array_push($data, ["id" => $subreddit->id, "name" => $subreddit->name]);
       }

       return $data;
    }

    public function isUserSubscribed($subreddit) {
      $sub = Subdoot::whereName($subreddit)->firstOrFail();

      if (Auth::user()->subreddits->contains($sub->id)) {
        return response()->json([
          'message' => 'subscribed'
        ]);
      } else {
        return response()->json([
          'message' => 'unsubscribed'
        ]);
      }
    }
}
