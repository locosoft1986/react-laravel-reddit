var Fetch = require('whatwg-fetch');
var baseUrl = 'http://localhost:8000';

var service = {
  get: function(url) {
    return fetch(baseUrl + url)
            .then(function(response) {
              return response.json();
            });
  },

  post: function(url, data) {
    return fetch(baseUrl + url, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      method: "post",
      body: JSON.stringify(data)
    }).then(function(response) {
      return response.json();
    });
  },

  authenticatedGet: function(url) {
    return fetch(baseUrl + url, {
      "headers": {
        "Authorization": "Bearer " + localstorage.token
      },
      "method": "get"
    }).then(function(response) {
        return response.json();
    });
  }
}

module.exports = service;
