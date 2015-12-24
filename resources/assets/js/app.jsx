var React = require('react');
var ReactDOM = require('react-dom');

var LoginForm = require('./components/auth/login/LoginForm.jsx');
var RegistrationForm = require('./components/auth/registration/RegistrationForm.jsx');
var NewSubreddit = require('./components/subreddit/NewSubreddit.jsx');

if (document.getElementById('loginForm'))
  ReactDOM.render(<LoginForm />, document.getElementById('loginForm'));
if (document.getElementById('registrationForm'))
  ReactDOM.render(<RegistrationForm />, document.getElementById('registrationForm'));
if (document.getElementById('newSubreddit'))
  ReactDOM.render(<NewSubreddit />, document.getElementById('newSubreddit'));
