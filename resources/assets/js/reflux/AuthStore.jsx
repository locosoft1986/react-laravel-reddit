var Reflux = require('reflux');

var Actions = require ('./AuthActions.jsx');

module.exports = Reflux.createStore({
  listenables: [Actions],

  login: function(token) {
    console.log(!!localStorage.token);
    if (localStorage.token) {
      this.fireUpdate();
    }
    if (token) {
      console.log('asd');
      localStorage.token = token;
      this.fireUpdate();
    }
  },

  loggedIn: function() {
    return !!localStorage.token;
  },

  getToken: function() {
    return localStorage.token;
  },

  logout: function() {
    delete localStorage.token;
    this.fireUpdate();
  },

  fireUpdate: function() {
    this.trigger('change', !!localStorage.token);
  }
});
