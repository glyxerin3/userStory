/**
 * Created by lala on 11.11.2015.
 */
(function () {
    'use strict';

    angular.module('userService', [])
        .factory('User', function ($http) {
            var userFactory = {};

            userFactory.create = function (userData) {
                return $http.post('/api/signup', userData);
            };

            userFactory.all = function () {
                return $http.get('/api/users');
            };

            return userFactory;
        });

}());