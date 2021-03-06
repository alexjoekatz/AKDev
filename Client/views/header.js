define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/Static/headerTemplate.html',

], function ($, _, Backbone,headerTemplate) {
    var Header = Backbone.View.extend({
        events: {},
        el: $('div[data-template="header"]'),

        render: function () {
          var compiledTemplate = _.template(headerTemplate);
          this.$el.html(compiledTemplate);
        },

        initialize: function () {
          $('.location').val('Cape Town');         
        }


    });

    return Header;
});
