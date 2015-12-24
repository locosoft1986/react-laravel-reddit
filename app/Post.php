<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = ['title', 'link', 'body', 'user_id', 'subreddit_id'];

    public function subreddit() {
      return $this->belongsTo('App\Subreddit');
    }

    public function user() {
      return $this->belongsTo('App\User');
    }
}
