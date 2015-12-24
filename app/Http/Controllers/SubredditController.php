<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Subreddit;

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
}
