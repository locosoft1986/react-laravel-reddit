var React = require('react');

var EmailField = require('./UsernameField.jsx');
var PasswordField = require('./PasswordField.jsx');

var AlertWrapper = require('../../AlertWrapper.jsx');

module.exports = React.createClass({
	onSubmit: function(e) {
		e.preventDefault();
	},
	render: function() {
		var containerStyle = {
			marginTop: 25
		};
		var errors = [];
		return (
			<div style={containerStyle} className="container">
				<h1>Sign in</h1>
				<form onSubmit={this.onSubmit}>
					<AlertWrapper alerts={errors} />
					<EmailField />
					<PasswordField />
					<button className="waves-effect waves-light btn blue right">Log In</button>
				</form>
			</div>
		);
	}
});
