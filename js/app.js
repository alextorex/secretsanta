requirejs.config({
    appDir: ".",
    baseUrl: "js",
    paths: {
        // keep the local files in case the dns does not respond
        'ko': ['https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.2/knockout-min', 'lib/knockout-min'],
        'bootstrap': ['https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min', 'lib/bootstrap-min'],
        'jquery': ['https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min', 'lib/jquery-min'],
        'underscore': ['https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min', 'lib/underscore-min']
    },
    shim: {
        'bootstrap' : ['jquery']
    }
});

require([
    'model/list',
    'bootstrap'
], function(list) {
    'use strict';
    new list('users.json');
    return {};
});