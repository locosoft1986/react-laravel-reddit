var React = require('react');

var Actions = require('../../../reflux/RegistrationActions.jsx');

module.exports = React.createClass({
	getInitialState: function() {
	    return {
	    	password: "",
        password_confirmation: "",
	    	password_valid: true,
        confirmation_valid: true
	    };
	},

  /*
    Okay, so this is a messy function
    We check these criteria each time the password field changes:
      Password is at least 5 characters
      Password is equal to the confirmed password

    Now, we want to make sure that the password is only marked valid
    if all of the criteria is true
    So because of that I only assign false values to password_valid until
    both are checked at the end
  */
	onPasswordChange: function(e) {
		if (e.target.value.length < 5) {
			this.setState({
				password: e.target.value,
        password_valid: false
			});
			Actions.postFormErrors({
				"id": "passwordLength",
				"error": "Password must be atleast 5 characters"
			});
		}

    if (e.target.value != this.state.password_confirmation) {
      this.setState({
        password: e.target.value,
        password_valid: false
      });
      Actions.postFormErrors({
        'id': 'passwordsDoNotMatch',
        'error': 'Passwords do not match'
      });
    }

    if (e.target.value == this.state.password_confirmation) {
      Actions.clearFormError('passwordsDoNotMatch');
    }

    if (e.target.value.length >= 5) {
      Actions.clearFormError('passwordLength');
    }

    if (e.target.value == this.state.password_confirmation && e.target.value.length >= 5) {
      this.setState({
        password: e.target.value,
        password_valid: true
      });
      Actions.clearFormError('passwordLength');
      Actions.clearFormError('passwordsDoNotMatch');
    }
	},

  onConfirmationChange: function(e) {
    if (e.target.value == this.state.password) {
      this.setState({
        password_confirmation: e.target.value,
        confirmation_valid: true
      });
      Actions.clearFormError('passwordsDoNotMatch');
    } else {
      this.setState({
        password_confirmation: e.target.value,
        confirmation_valid: false
      });
      Actions.postFormErrors({
        'id': 'passwordsDoNotMatch',
        'error': 'Passwords do not match'
      });
    }

    // Mark the original password as valid just incase it wasn't already
    if (this.state.password.length >= 5 && e.target.value == this.state.password) {
      this.setState({
        password_valid: true
      });
    }
  },

	render: function() {
    passwordClass = this.state.password_valid ? "valid" : "invalid";
		confirmationClass = this.state.confirmation_valid ? "valid" : "invalid";
		return(
      <div>
  			<div className="input-field">
  				<input type="password"
  					value={this.state.password}
  					onChange={this.onPasswordChange}
  					className={passwordClass}
  					id="password"
  					required
  				/>
  				<label htmlFor="password">Password</label>
  			</div>
        <div className="input-field">
  				<input type="password"
  					value={this.state.password_confirmation}
  					onChange={this.onConfirmationChange}
  					className={confirmationClass}
  					id="password_confirmation"
  					required
  				/>
  				<label htmlFor="password_confirmation">Confirm Password</label>
  			</div>
      </div>
		);
	}
});
