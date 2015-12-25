var React = require('react');
var Post = require('./Post.jsx');
var SubscribeButton = require('./SubscribeButton.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      posts: []
    };
  },

  componentWillMount: function() {
    var vm = this;
    $.ajax({
      url: '/api/v1/getSubredditsPosts/' + document.getElementById('subreddit_name').value,
      method: 'get',
      dataType: 'json',
      contentType: 'json',
      success: function(response) {
        vm.setState({
          posts: response
        });
      }
    });
  },

  render: function() {
    var posts = this.state.posts.map(function(item) {
      return <Post
              title={item.title}
              date={item.created_at}
              user={item.username}
              subreddit={item.subreddit}
              score={item.score}
              permalink={item.permalink}
              slug={item.slug}
              key={item.permalink}
            />
    });
    return (
      <div>
        <SubscribeButton subreddit={document.getElementById('subreddit_name').value} />
        {posts}
      </div>
    );
  }
});
