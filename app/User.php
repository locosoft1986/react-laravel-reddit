<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username', 'email', 'password',
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function posts() {
      return $this->hasMany('App\Post');
    }

    public function votes() {
      return $this->hasMany('App\Vote');
    }

    public function subreddits() {
      return $this->belongsToMany('App\Subreddit');
    }
}
