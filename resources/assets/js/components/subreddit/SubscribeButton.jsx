var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      subscribed: false
    };
  },

  componentWillMount: function() {
    var vm = this;
    $.ajax({
      url: '/api/v1/isUserSubscribed/' + this.props.subreddit,
      method: 'get',
      dataType: 'json',
      contentType: 'json',
      success: function(response) {
        vm.setState({
          subscribed: response.message
        });
      }
    });
  },

  onClick: function(e) {
      var vm = this;
      this.setState({
        subscribed: !this.state.subscribed
      });
      $.ajax({
        url: '/api/v1/subscribeUserToSubreddit/' + this.props.subreddit,
        method: 'get',
        dataType: 'json',
        contentType: 'json',
        success: function(response) {
          vm.setState({
            subscribed: response.message
          });
        }
      })
  },

  render: function() {
    return (
      <button className="waves-effect waves-light btn blue" onClick={this.onClick}>{this.state.subscribed ? (<span>Unsubscribe</span>) : (<span>Subscribe</span>)}</button>
    );
  }
});
