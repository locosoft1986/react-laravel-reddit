var React = require('react');

var TitleField = require('./TitleField.jsx');
var LinkField = require('./LinkField.jsx');
var BodyField = require('./BodyField.jsx');
var SubredditField = require('./SubredditField.jsx');

var TokenField = require('../TokenField.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      isLink: true,
      subreddits: []
    };
  },

  componentWillMount: function() {
    var vm = this;
    $.ajax({
      url: '/api/v1/getListOfSubreddits',
      method: 'get',
      dataType: 'json',
      contentType: 'json',
      success: function(response) {
        console.log(response);
        vm.setState({
          subreddits: response
        });
      }
    });
  },

  toggleTypeOfPost: function() {
    this.setState({
      isLink: !this.state.isLink
    });
  },

  render: function() {
    var options = this.state.subreddits.map(function(item) {
      return <option value={item.id} key={item.id}>{item.name}</option>
    });
    return (
      <div className="container">
        <h1>New Post</h1>
        <div className="switch">
          <label>
            Text
            <input type="checkbox" checked={this.state.isLink} onChange={this.toggleTypeOfPost} />
            <span className="lever"></span>
            Link
          </label>
        </div>
        <form action="/new/post" method="post">

          <TokenField />

          <TitleField />

          {this.state.isLink ? (
          <LinkField isLink={this.state.isLink} />
        ) : (
          <BodyField />
        )}

          <SubredditField options={options} />

          <button className="waves-effect waves-light btn blue right">Submit</button>
        </form>
      </div>
    );
  }
});
