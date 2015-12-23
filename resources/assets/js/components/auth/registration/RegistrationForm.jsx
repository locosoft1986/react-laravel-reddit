var React = require('react');

var EmailField = require('./EmailField.jsx');
var PasswordConfirmationField = require('./PasswordConfirmationField.jsx');
var UsernameField = require('./UsernameField.jsx');
var AlertWrapper = require('../../AlertWrapper.jsx');

var Reflux = require('reflux');
var Actions = require('../../../reflux/RegistrationActions.jsx');
var Store = require('../../../reflux/RegistrationStore.jsx');

module.exports = React.createClass({
	mixins: [Reflux.listenTo(Store, 'onChange')],

	getInitialState: function() {
		return {
			errors: []
		};
	},

	onSubmit: function(e) {
		e.preventDefault();
		if (this.refs.username.state.valid &&
				this.refs.email.state.valid &&
				this.refs.password.state.password_valid &&
				this.refs.password.state.confirmation_valid) {

					console.log('again');
					Actions.postRegistration({
						username: this.refs.username.state.username,
						email: this.refs.email.state.value,
						password: this.refs.password.state.password
					});

		}
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

		var formStyle = {
			marginTop: 25
		};

		return (
			<div style={containerStyle} className="container">
				<h1>New Account</h1>
				<AlertWrapper alertType="warning" alerts={this.state.errors} />
				<form onSubmit={this.onSubmit} style={formStyle}>
					<UsernameField ref="username" />
					<EmailField ref="email" />
					<PasswordConfirmationField ref="password" />
					<button className="waves-effect waves-light btn blue right">Register</button>
				</form>
			</div>
		);
	}
});
