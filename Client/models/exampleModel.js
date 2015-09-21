define([
  'jquery',      // lib/jquery/jquery
  'underscore',  // lib/underscore/underscore
  'backbone'    // lib/backbone/backbone
], function ($, _, Backbone) {
    var Model = Backbone.Collection.extend({
        url: '/',

        initialize: function () {

        }
    });
    return Model;
});
