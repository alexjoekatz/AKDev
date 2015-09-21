define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/Static/homeTemplate.html',

], function ($, _, Backbone,homeTemplate) {
    var Header = Backbone.View.extend({
        events: {},
        el: $('div[data-template="content"]'),

        render: function () {
          var compiledTemplate = _.template(homeTemplate);
          this.$el.html(compiledTemplate);
        },

        initialize: function () {
        }
    });
    return Header;
});
