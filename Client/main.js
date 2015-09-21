// Filename: main.js

require.config({
    paths: {
        jquery      :     'libs/jquery/jquery',
        jqueryui    :     'libs/jqueryui/jquery-ui-1.10.3',
        underscore  :     'libs/underscore/underscore',
        backbone    :     'libs/backbone/backbone',
        formalize   :     'libs/formalize/jquery.formalize',
        accordion   :     'libs/accordion/accordion',
        modernizer  :     'libs/modernizer/modernizr-2.6.2.min',
        fineuploader:     'libs/fineuploader/all.fineuploader-4.0.2.min',
        moment      :     'libs/moment/moment',
        templates   :     '../templates',
        scroll      :     'libs/scroll/scroll',
        models      :     './models',
    },

    shim: {
        'backbone': {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },

        'jqueryui': {
            deps: ['jquery']
        },

        'accordion': {
            deps: ['jquery']
        },

        'formalize': {
            deps: ['jquery']
        },

        'modernizer': {
            deps: ['jquery']
        },

        'underscore': {
            exports: '_'
        },

        'fineuploader': {
            deps: ['jquery'],
            exports: 'qq'
        },

        'scroll': {
            deps:['jquery']
        }
    }
});



require(['app'], function (App) {
    App.initialize();
});
