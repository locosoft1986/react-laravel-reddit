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
        <textarea
          id="body"
          className="materialize-textarea"
          value={this.state.value}
          onChange={this.onChange}
          name="body"
        ></textarea>
        <label htmlFor="body">Body</label>
      </div>
    );
  }
});
