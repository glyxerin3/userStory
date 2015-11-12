/**
 * Created by lala on 11.11.2015.
 */
(function () {
    'use strict';

    angular.module('MyApp', ['appRoutes', 'mainCtrl', 'authService', 'userCtrl', 'userService', 'storyService', 'storyCtrl', 'reverseDirective'])
        .config(function ($httpProvider) {
            $httpProvider.interceptors.push('AuthInterceptor');
        });
}());