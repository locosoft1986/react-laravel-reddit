<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Subreddit extends Model
{
    protected $fillable = ['name', 'description'];

    public function posts() {
      return $this->hasMany('App\Post');
    }

    public function users() {
      return $this->hasMany('App\User');
    }
}
