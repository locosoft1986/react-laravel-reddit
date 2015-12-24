var Reflux = require('reflux');
var Actions = require('./AuthActions.jsx');

var HTTP = require('../services/HTTPService');

module.exports = Reflux.createStore({
  listenables: [Actions],

  getFormErrors: function() {
    if (!this.errors) {
      this.errors = [];
    }
  },

  postFormErrors: function(data) {
    if (!this.errors) {
      this.errors = [];
    }
    var found = false;
    for (var i = 0; i < this.errors.length; i++) {
      if (this.errors[i].id == data.id) {
        found = true;
      }
    }
    if (!found) {
      this.errors.push(data);
    }

    found = false;

    this.fireUpdate();
  },

  clearFormError: function(data) {
    var indexFound = null;
    if (!this.errors) {
      this.errors = [];
    }
    for (var i = 0; i < this.errors.length; i++) {
      if (this.errors[i].id == data) {
        indexFound = i;
        break;
      }
    }
    if (indexFound != null) {
      this.errors.splice(indexFound, 1);
    }

    this.fireUpdate();
  },

  postRegistration: function(data) {
    HTTP.post('/api/v1/register', data)
        .then(function(response) {
          if (response.error) {
            this.postFormErrors(response);
            this.fireUpdate();
          } else {
            location.assign('/');
          }
        }.bind(this));

    this.fireUpdate();
  },

  postLogin: function(data) {
    HTTP.post('/api/v1/login', data)
        .then(function(response) {
          if (response.error) {
            this.postFormErrors(response);
            this.fireUpdate();
          } else {
            location.assign('/');
          }
        }.bind(this));
  },

  fireUpdate: function() {
    this.trigger('change', this.errors);
  }
});
