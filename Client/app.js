// Filename: app.js

define([
  'jquery',
  'underscore',
  'backbone',
  'router'
],
  function ($, _, Backbone, Router) {
      var initialize = function () {
          //var session = new Session({location:'Cape'});
          var router = new Router();
          Backbone.history.start();


      }

      return {
          initialize: initialize
      };
  });
