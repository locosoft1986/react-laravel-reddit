var React = require('react');
var SubscribeButton = require('./SubscribeButton.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      subscriber_count: "",
      post_count: "",
      description: ""
    };
  },

  componentWillMount: function() {
    var vm = this;
    $.ajax({
      url: '/api/v1/getSubredditMetaData/' + document.getElementById('subreddit_name').value,
      method: 'get',
      success: function(response) {
          vm.setState({
            subscriber_count: response.subscriber_count,
            post_count: response.post_count,
            description: response.description
          });
      }
    });
  },

  render: function() {
    return (
      <div className="container z-depth-1">
        <SubscribeButton subreddit={document.getElementById('subreddit_name').value} />
        <p>Subscribers: {this.state.subscriber_count}</p>
        <p>Posts: {this.state.post_count}</p>
        <p>
        {this.state.description}
        </p>
      </div>
    );
  }
});
