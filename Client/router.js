define([
  'jquery',
  'underscore',
  'backbone',
  'bootstrap'
],

function ($, _, Backbone) {
    var Router = Backbone.Router.extend({
        el: "div[data-template='content']",
        routes: {
            ''          :   'home',
            'about'     :   'about',
            'contact'   :   'contact',
            'projects'  :   'projects',
        },
        
        AppView:function(view){
            var el = this.el;
            if (this.currentView){
                this.currentView.close();
            }
            this.currentView = view;
            this.currentView.render();
            $(el).html(this.currentView.el);
        },

        initialize: function () {
            var Header = require(['views/header'], function (Header) {
                var header = new Header();
                header.render();
            })

            var Footer = require(['views/footer'], function (Footer) {
                var footer = new Footer();
                footer.render();
            })
        },

        home: function () {
            var view = this,
                Home = require(['views/home'], function (Home) {
                var home = new Home();
                view.AppView(home);
            });
        }
    });

    return Router;
    var router = new Router();
});
