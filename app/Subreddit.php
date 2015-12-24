<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Subreddit extends Model
{
    protected $fillable = ['name'];

    public function posts() {
      return $this->hasMany('App\Post');
    }
}
