var React = require('react');

var Actions = require('../../../reflux/RegistrationActions.jsx');
var HTTP = require('../../../services/HTTPService');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      username: "",
      valid: true
    };
  },

  onChange: function(e) {
    this.setState({
      username: e.target.value
    });

    HTTP.post('/api/v1/checkIfUsernameIsInUse', {username: e.target.value})
        .then(function(response) {
          if (response.error) {
            Actions.postFormErrors(response);
            this.setState({
              username: e.target.value,
              valid: false
            });
          } else {
            this.setState({
              username: e.target.value,
              valid: true
            });
            Actions.clearFormError('usernameInUse');
          }
        }.bind(this));
  },

  render: function() {
    var validClass = this.state.valid ? "valid" : "invalid";
    return (
      <div className="input-field">
        <input
          type="text"
          value={this.state.username}
          onChange={this.onChange}
          className={validClass}
          id="username"
          required
        />
        <label htmlFor="username">Username</label>
      </div>
    );
  }
});
