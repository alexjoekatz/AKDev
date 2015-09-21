define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/Static/footerTemplate.html',

], function ($, _, Backbone,headerTemplate) {
    var Header = Backbone.View.extend({
        events: {},
        el: $('div[data-template="footer"]'),

        render: function () {
          var compiledTemplate = _.template(headerTemplate);
          this.$el.html(compiledTemplate);
        },

        initialize: function () {
           
        }


    });

    return Header;
});
