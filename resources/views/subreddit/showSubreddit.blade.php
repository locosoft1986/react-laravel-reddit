@extends('layout', ['sub' => $subreddit->name])

@section('content')
  <input type="hidden" name="subreddit_name" id="subreddit_name" value="{{$subreddit->name}}" />
  <div class="container push-down">
    <div id="subredditPosts"></div>
  {{-- @foreach ($subreddit->posts as $post)
    <div class="post">
      <div class="post-title">
        <a href="/r/{{$subreddit->name}}/comments/{{$post->permalink}}/{{$post->slug}}">{{$post->title}}</a>
      </div>
      <div class="post-meta">
        submitted
        <span title="{{\Carbon\Carbon::parse($post->created_at)}}">{{\Carbon\Carbon::parse($post->created_at)->diffForHumans()}}</span>
        by <a href="/u/{{$post->user->username}}">{{$post->user->username}}</a>
        to <a href="/r/{{$post->subreddit->name}}">{{$post->subreddit->name}}</a>
      </div>
      <div class="post-score">
        {{count($post->votes)}}
      </div>
    </div>
  @endforeach --}}
</div>
@stop
