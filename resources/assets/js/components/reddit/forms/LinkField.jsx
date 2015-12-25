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
          name="link"
          id="link"
          value={this.state.value}
          onChange={this.onChange}
          required={this.props.isLink}
        />
        <label htmlFor="link">Link</label>
      </div>
    );
  }
});
