/**
 * Created by lala on 12.11.2015.
 */
(function () {
    'use strict';

    angular.module('reverseDirective', [])
        .filter('reverse', function () {
            return function (items) {
                if (items === undefined)
                    return items;

                return items.slice().reverse();

            }
        });
}());