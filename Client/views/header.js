define([
  'jquery',
  'underscore',
  'backbone',

], function ($, _, Backbone) {
    var Header = Backbone.View.extend({
        events: {

        },

        el: $('.header'),

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
