var React = require('react');
var validator = require('email-validator');

var Actions = require('../../../reflux/AuthActions.jsx');

var HTTP = require('../../../services/HTTPService');

module.exports = React.createClass({
	getInitialState: function() {
	    return {
	    	value: "",
	    	valid: true
	    };
	},
	onChange: function(e) {

		this.setState({
			value: e.target.value
		});

    if (!validator.validate(e.target.value)) {
      this.setState({
        valid: false
      });
			Actions.postFormErrors({
				'id': 'emailInvalid',
				'error': 'Please enter a valid email address'
			});
    } else {
			Actions.clearFormError('emailInvalid');
    }

		HTTP.post('/api/v1/checkIfEmailIsInUse', {email: e.target.value})
				.then(function(response) {
					if (response.error) {
						this.setState({
							valid: false
						});
						Actions.postFormErrors(response);
					} else {
						Actions.clearFormError('emailInUse');
						if (validator.validate(e.target.value)) {
							this.setState({
								valid: true
							});
						}
					}
				}.bind(this));
	},
	render: function() {
		var emailClass = this.state.valid ? "valid" : "invalid";
		return(
			<div className="input-field">
				<input type="email"
					value={this.state.value}
					onChange={this.onChange}
					id="email"
					className={emailClass}
					name="email"
					required
				/>
				<label htmlFor="email">Email</label>
			</div>
		);
	}
});
