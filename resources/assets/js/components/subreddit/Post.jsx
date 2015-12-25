var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {

    };
  },

  render: function() {
    return (
      <div className="post">
        <div className="post-title">
          <a href={"/r/" + this.props.subreddit + "/comments/" + this.props.permalink + "/" + this.props.slug}>{this.props.title}</a>
        </div>
        <div className="post-meta">
          submitted <span>{this.props.date}</span> by <a href={"/u/" + this.props.user}>{this.props.user}</a> to <a href={"/r/" + this.props.subreddit}>{this.props.subreddit}</a>
        </div>
        <div className="post-score">
          0
        </div>
      </div>
    );
  }
});
