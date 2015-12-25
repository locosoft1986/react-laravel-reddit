<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\User;
use App\Subreddit;
use Auth;

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
      $sub = Subreddit::whereName($subreddit)->firstOrFail();

      if (Auth::user()->subreddits->contains($sub->id)) {
        return response()->json([
          'message' => true
        ]);
      } else {
        return response()->json([
          'message' => false
        ]);
      }
    }

    public function add_user_date_subreddit($ar) {
      $ar["username"] = $ar->user->username;
      $ar["subreddit"] = $ar->subreddit->name;
      return $ar;
    }

    public function getSubredditsPosts($subreddit) {
      $sub = Subreddit::whereName($subreddit)->firstOrFail()->posts;

      // Extract the data we want out of the posts for react to handle
      $formatted_posts = array_map(function($ar) {
        $post = [];
        $post["username"] = $ar->user->username;
        $post["subreddit"] = $ar->subreddit->name;
        $post["title"] = $ar->title;
        $post["slug"] = $ar->slug;
        $post["permalink"] = $ar->permalink;
        $post["link"] = $ar->link;
        $post["body"] = $ar->body;
        $post["created_at"] = \Carbon\Carbon::parse($ar->created_at)->diffForHumans();
        return $post;
      }, iterator_to_array($sub));

      return response()->json($formatted_posts);
    }

    public function subscribeToSubreddit($subreddit) {
      $user = Auth::user();

      $sub = Subreddit::whereName($subreddit)->firstOrFail();

      if ($user->subreddits->contains($sub->id)) {
          $user->subreddits()->detach($sub->id);
          return response()->json([
            'message' => false
          ]);
      } else {
          $user->subreddits()->attach($sub->id);
          return response()->json([
            'message' => true
          ]);
      }
    }
}
