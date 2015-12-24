@extends('layout')

@section('content')
  <h1>{{ $subreddit->name }}</h1>
  <div class="container">
  @foreach ($subreddit->posts as $post)
    <div class="row">
    <div class="col s12 m4">
      <div class="card">
        <div class="card-content">
          <span class="card-title">
            {{$post->title}}
          </span>
        </div>
        <div class="card-action">
          <a href="#">Comments</a>
          <a href="#">{{$post->user->username}}</a>
        </div>
      </div>
    </div>
  </div>
  @endforeach
</div>
@stop
