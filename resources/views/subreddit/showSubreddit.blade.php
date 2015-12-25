@extends('layout', ['sub' => $subreddit->name])

@section('content')
  <input type="hidden" name="subreddit_name" id="subreddit_name" value="{{$subreddit->name}}" />
  <div class="row">
    <div class="col s12 l8">
      <div class="container push-down">
        <div id="subredditPosts"></div>
      </div>
    </div>
    <div class="col s12 l4 sidebar">
      @include('subreddit.sidebar')
    </div>
  </div>
@stop
