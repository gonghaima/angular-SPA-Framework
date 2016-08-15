﻿/// <reference path="F:\Study\spaWithAngular\Steven work files\Framework\Framework\Scripts/angular.min.js" />
"use strict";

angular.module("psMenu").controller('psMenuController',
    ['$scope', '$rootScope', function ($scope, $rootScope) {
        this.setActiveElement = function (el) {
            $scope.activeElement = el;
        };

        this.setRoute = function (route) {
            $rootScope.$broadcast('ps-menu-item-selected-event', {route: route});
        }
    }]);