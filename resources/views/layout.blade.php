<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta id="token" name="csrf-token" content="{{ csrf_token() }}">
    <title>Reddit Clone</title>
    <link rel="stylesheet" href="/css/materialize.min.css" media="screen" title="no title" charset="utf-8">
    <link rel="stylesheet" href="/css/app.css">
  </head>
  <body>
    @include('partials.navigation')
    @yield('content')
    <script src="/js/jquery.min.js" charset="utf-8"></script>
    <script src="/js/materialize.min.js" charset="utf-8"></script>
    <script src="/js/app.js" charset="utf-8"></script>
  </body>
</html>
