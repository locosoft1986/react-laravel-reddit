var React = require('react');

var UsernameField = require('./UsernameField.jsx');
var PasswordField = require('./PasswordField.jsx');

var AlertWrapper = require('../../AlertWrapper.jsx');

var Reflux = require('reflux');
var Actions = require('../../../reflux/AuthActions.jsx');
var Store = require('../../../reflux/AuthStore.jsx');

module.exports = React.createClass({
	mixins: [Reflux.listenTo(Store, 'onChange')],

	getInitialState: function() {
		return {
			errors: [],
			token: document.getElementById('token').content
		};
	},

	onSubmit: function(e) {
		e.preventDefault();
		Actions.postLogin({
			username: this.refs.username.state.value,
			password: this.refs.password.state.value
		});
	},

	componentWillMount: function() {
		this.setState({
			token: document.getElementById('token').content
		});
	},

	onChange: function(event, data) {
		this.setState({
			errors: data
		});
	},

	render: function() {
		var containerStyle = {
			marginTop: 25
		};
		console.log(this.state.token);
		return (
			<div style={containerStyle} className="container">
				<h1>Sign in</h1>
				<form action="/login" method="post">
					<AlertWrapper alerts={this.state.errors} />
					<input name="_token" type="hidden" value={this.state.token} />
					<UsernameField ref="username" />
					<PasswordField ref="password" />
					<button className="waves-effect waves-light btn blue right">Log In</button>
				</form>
			</div>
		);
	}
});
