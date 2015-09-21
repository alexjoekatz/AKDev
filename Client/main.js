// Filename: main.js

require.config({
    paths: {
        jquery      :     'lib/jquery',
        bootstrap   :     'lib/bootstrap',
        fullPage    :     'lib/jquery.fullPage',
        underscore  :     'lib/underscore',
        backbone    :     'lib/backbone',
        templates   :     './templates',
        models      :     './models',
    },

    shim: {
        'backbone': {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },

        'fullPage':{
            deps:['jquery'],
            exports:'fullpage'
        },

        'bootstrap':{
            deps: ['jquery']
        },

        'underscore': {
            exports: '_'
        }
    },
});



require(['app'], function (App) {
    App.initialize();
});


