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

	onSubmit: function(e) {
		e.preventDefault();
		Actions.postLogin({
			username: this.refs.username.state.value,
			password: this.refs.password.state.value,
			"_token": this.state.token
		});
	},

	render: function() {
		var containerStyle = {
			marginTop: 25
		};

		return (
			<div style={containerStyle} className="container">
				<h1>Sign in</h1>
				<form onSubmit={this.onSubmit}>
					<AlertWrapper alertType="warning" alerts={this.state.errors} />
					<input name="_token" type="hidden" value={this.state.token} />
					<UsernameField ref="username" />
					<PasswordField ref="password" />
					<button className="waves-effect waves-light btn blue right">Log In</button>
				</form>
			</div>
		);
	}
});
