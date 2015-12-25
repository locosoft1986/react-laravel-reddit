var React = require('react');
var ReactDOM = require('react-dom');

var LoginForm = require('./components/auth/login/LoginForm.jsx');
var RegistrationForm = require('./components/auth/registration/RegistrationForm.jsx');
var NewSubreddit = require('./components/subreddit/NewSubreddit.jsx');
var NewPost = require('./components/subreddit/NewPost.jsx');
var Subreddit = require('./components/subreddit/Subreddit.jsx');
var FrontPage = require('./components/subreddit/FrontPage.jsx');

if (document.getElementById('loginForm'))
  ReactDOM.render(<LoginForm />, document.getElementById('loginForm'));
if (document.getElementById('registrationForm'))
  ReactDOM.render(<RegistrationForm />, document.getElementById('registrationForm'));
if (document.getElementById('newSubreddit'))
  ReactDOM.render(<NewSubreddit />, document.getElementById('newSubreddit'));
if (document.getElementById('newPost'))
  ReactDOM.render(<NewPost />, document.getElementById('newPost'));
if (document.getElementById('subredditPosts'))
  ReactDOM.render(<Subreddit />, document.getElementById('subredditPosts'));
if (document.getElementById('frontPagePosts'))
  ReactDOM.render(<FrontPage />, document.getElementById('frontPagePosts'));
