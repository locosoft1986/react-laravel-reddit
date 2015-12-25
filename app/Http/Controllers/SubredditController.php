<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Subreddit;
use App\Post;
use App\User;
use Auth;

use Cocur\Slugify\Slugify;

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
        "subreddit_id" => $request->subreddit_id
      ];

      $slugify = new Slugify();
      $data['slug'] = $slugify->slugify($request->get('title'), '_');

      if (strlen($data['slug']) > 46) {
          $data['slug'] = substr($data['slug'], 0, 46);
      }
      //6 character string for a permalink
      $permalink = $this->generateRandomString();
      //Make sure the permalink is unique
      while(Post::wherePermalink($permalink)->exists()) {
          $permalink = $this->generateRandomString();
      }
      $data['permalink'] = $permalink;

      Post::create($data);

      return redirect('/r/' . Subreddit::whereId($request->subreddit_id)->firstOrFail()->name . '/comments/' . $data['permalink'] . '/' . $data['slug']);
    }

    // Random String function thanks to http://stackoverflow.com/questions/4356289/php-random-string-generator
    private function generateRandomString($length = 6) {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }
}
