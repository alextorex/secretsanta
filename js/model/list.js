define([
    'jquery',
    'ko',
    'underscore'
], function ($, ko, _) {
    'use strict';

    return function (listUrl) {
        this.list = {
            noRecords: ko.observable(true),
            users: ko.observableArray([])
        };
        this.request = function (listUrl) {
            var self = this;
            $.ajax({
                url: listUrl,
                type: 'get',
                dataType: 'json',
                showLoader: true,
                context: this,
                success: function (data) {
                    if (typeof data !== 'undefined'
                        && typeof data.users !== 'undefined'
                        && data.users.length > 0
                    ) {
                        self.list.users(
                            _.shuffle(
                                data.users
                            )
                        );
                    }
                }
            });
        };
        ko.applyBindings(this.list);
        this.request(listUrl);
    };
});