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
                        && data.users.length >= 2
                    ) {
                        var givers = data.users.slice(),
                            receivers = data.users.slice(),
                            giverName, receiverName;

                        givers.sort(function() {
                            return .5 - Math.random();
                        });

                        receivers.sort(function() {
                            return 0.5 - Math.random();
                        });

                        while (givers.length) {
                            giverName = givers.pop();
                            receiverName = receivers[0].name.first === giverName.first
                                ? receivers.pop()
                                : receivers.shift();
                            self.list.users.push({'giver': giverName, 'receiver': receiverName});
                        }
                    }
                }
            });
        };
        ko.applyBindings(this.list);
        this.request(listUrl);
    };
});
