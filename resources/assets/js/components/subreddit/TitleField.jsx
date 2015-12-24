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
        <input
          type="text"
          name="title"
          id="title"
          value={this.state.value}
          onChange={this.onChange}
          required
        />
        <label htmlFor="title">Title</label>
      </div>
    );
  }
});
