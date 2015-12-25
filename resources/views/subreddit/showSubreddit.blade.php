@extends('layout', ['sub' => $subreddit->name])

@section('content')
  <input type="hidden" name="subreddit_name" id="subreddit_name" value="{{$subreddit->name}}" />
  <div class="row">
    <div class="col s12 m8">
      <div class="container push-down">
        <div id="subredditPosts"></div>
      </div>
    </div>
    <div class="col s12 m4 sidebar">
      <div class="container z-depth-1">
        Subscribers: {{count($subreddit->users)}}
        <br>
        Posts: {{count($subreddit->posts)}}
        <br>
        {{$subreddit->description}}
      </div>
    </div>
  </div>
@stop
