var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      value: ""
    };
  },

  onChange: function(e) {
    this.setState({
      value: e.target.value
    });
  },

  render: function() {
    return (
      <div className="input-field">
        <select
          className="browser-default"
          id="subreddit"
          value={this.state.value}
          onChange={this.onChange}
          name="subreddit_id"
          required
        >
          {this.props.options}
        </select>
      </div>
    );
  }
});
