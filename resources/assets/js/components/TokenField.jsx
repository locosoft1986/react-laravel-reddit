var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {

    };
  },

  render: function() {
    return (
      <input type="hidden" name="_token" value={document.getElementById('token').content} />
    );
  }
});
