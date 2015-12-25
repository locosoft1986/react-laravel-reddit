@extends('layout', ['sub' => $post->subreddit->name])

@section('content')
  <input type="hidden" name="subreddit_name" id="subreddit_name" value="{{$post->subreddit->name}}" />
  <div class="row">
    @if(isset($post->link))
      <div class="col s12 l6 offset-l1">
        <div class="post">
          <div class="post-title">
            <a href="{{$post->link}}">{{$post->title}}</a>
          </div>
          <div class="post-meta">
            submitted <span>{{\Carbon\Carbon::parse($post->created_at)->diffForHumans()}}</span>
            by <a href="/u/{{$post->user->username}}">{{$post->user->username}}</a>
            to <a href="/r/{{$post->subreddit->name}}">{{$post->subreddit->name}}</a>
          </div>
          <div class="post-score">
            0
          </div>
        </div>
      </div>
    @elseif(isset($post->body))
      <div class="col s12 l6 offset-l1">
        <div class="">
        <div class="post">
          <div class="post-title">
            <a href="/r/{{$post->subreddit->name}}/comments/{{$post->permalink}}/{{$post->slug}}">{{$post->title}}</a>
          </div>
          <div class="post-content">
            {!! $post->body_html !!}
          </div>
          <div class="post-meta">
            submitted <span>{{\Carbon\Carbon::parse($post->created_at)->diffForHumans()}}</span>
            by <a href="/u/{{$post->user->username}}">{{$post->user->username}}</a>
            to <a href="/r/{{$post->subreddit->name}}">{{$post->subreddit->name}}</a>
          </div>
        </div>
      </div>
      </div>
    @endif
    <div class="col s12 l4 offset-l1 sidebar">
      @include('subreddit.sidebar')
    </div>
  </div>
@stop
