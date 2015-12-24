<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Subreddit;
use App\Post;
use App\User;
use Auth;

class SubredditController extends Controller
{
    public function newSubreddit() {
      return view('subreddit.newSubreddit');
    }

    public function createNewSubreddit(Request $request) {
      Subreddit::create($request->only('name', 'description'));

      return redirect('/r/' . $request->name);
    }

    public function showSubreddit($subreddit) {
      $subreddit = Subreddit::whereName($subreddit)->firstOrFail();

      return view('subreddit.showSubreddit', compact('subreddit'));
    }

    public function newPost() {
      return view('subreddit.newPost');
    }

    public function createNewPost(Request $request) {
      $data = [
        "title" => $request->title,
        "link" => $request->link,
        "body" => $request->body,
        "user_id" => Auth::user()->id,
        "subreddit_id" => Subreddit::whereName($request->subreddit_name)->firstOrFail()->id
      ];
      dd($data);
    }
}
