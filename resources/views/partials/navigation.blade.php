<nav class="blue">
  <div class="nav-wrapper">
    <a href="/" class="brand-logo">Reddit @if(isset($sub)) /r/{{$sub}} @endif</a>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
      @if (Auth::check())
        <li><a href="/logout">Logout</a>
      @else
			  <li><a href="/login">Login</a></li>
		    <li><a href="/register">Register</a></li>
      @endif
    </ul>
  </div>
</nav>
