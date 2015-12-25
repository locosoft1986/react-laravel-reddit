@extends('layout')

@section('content')
  <h1>{{ $subreddit->name }}</h1>
  <div class="container">
  @foreach ($subreddit->posts as $post)
    <div class="post">
      <div class="post-title">
        <a href="/r/{{$subreddit->name}}/{{$post->permalink}}/{{$post->slug}}">{{$post->title}}</a>
      </div>
      <div class="post-meta">
        {{\Carbon\Carbon::parse($post->created_at)->diffForHumans()}} | by {{$post->user->username}} to {{$post->subreddit->name}}
      </div>
      <div class="post-score">
        {{count($post->votes)}}
      </div>
    </div>
  @endforeach
</div>
@stop
