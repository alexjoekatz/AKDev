define([
  'jquery',
  'underscore',
  'backbone'
],

    function ($, _, Backbone) {
        var Router = Backbone.Router.extend({
            routes: {
                '': 'home',
            },
            
            AppView:function(view){
                if (this.currentView){
                    this.currentView.close();
                }
                this.currentView = view;
                this.currentView.render();
                $(".page").html(this.currentView.el);
            },

            initialize: function () {

                // var Header = require(['views/header'], function (Header) {
                //     var header = new Header();
                //     header.render();
                // })

                // var Footer = require(['views/footer'], function (Footer) {
                //     var footer = new Footer();
                //     footer.render();
                // })

                // var Sidebar = require(['views/sidebar'], function (Sidebar) {
                //     var sidebar = new Sidebar();
                //     sidebar.render();
                // })
            },

            home: function () {
                var that = this;
                var Home = require(['views/home'], function (Home) {
                    var home = new Home();
                    that.AppView(home);
                });
            }
        });

        return Router;
        var router = new Router();
    });
