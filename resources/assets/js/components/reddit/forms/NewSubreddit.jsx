var React = require('react');

var HTTP = require('../../../services/HTTPService');
var Actions = require('../../../reflux/AuthActions.jsx');
var Reflux = require('reflux');
var Store = require('../../../reflux/AuthStore.jsx');

var AlertWrapper = require('../../AlertWrapper.jsx');

module.exports = React.createClass({
  mixins: [Reflux.listenTo(Store, 'onError')],

  getInitialState: function() {
    return {
      name: "",
      description: "",
      name_valid: true,
      errors: []
    };
  },

  onError: function(event, errors) {
    this.setState({
      errors: errors
    });
  },

  onChange: function(e) {
    var vm = this;
    $.ajax({
      url: '/api/v1/checkIfSubredditNameIsInUse',
      data: {
        name: e.target.value,
        _token: document.getElementById('token').content
      },
      dataType: 'json',
      method: 'post',
      success: function(response) {
        if (response.error) {
          Actions.postFormErrors(response);
          vm.setState({
            name_valid: false
          });
        } else {
          Actions.clearFormError('subredditNameInUse');
          vm.setState({
            name_valid: true
          });
        }
      }
    });
    this.setState({
      name: e.target.value
    });
  },

  descriptionChange: function(e) {
    this.setState({
      description: e.target.value
    });
  },

  render: function() {
    var nameClass = this.state.name_valid ? "valid" : "invalid";
    return (
      <div className="container">
        <h1>New Subreddit</h1>
        <AlertWrapper alertType="warning" alerts={this.state.errors} />
        <form action="/new/subreddit" method="post">
          <input type="hidden" value={document.getElementById('token').content} name="_token" />
          <div className="input-field">
            <input
              type="text"
              value={this.state.name}
              onChange={this.onChange}
              onClass={nameClass}
              name="name"
              id="name"
              required
            />
            <label htmlFor="name">Subreddit Name</label>
          </div>
          <div className="input-field">
            <textarea
              value={this.state.description}
              onChange={this.descriptionChange}
              className="materialize-textarea"
              name="description"
              id="description"
            >
            </textarea>
            <label htmlFor="description">Description</label>
          </div>
          <button className="waves-effect waves-light btn blue right" disabled={!this.state.name_valid}>Create</button>
        </form>
      </div>
    );
  }
});
