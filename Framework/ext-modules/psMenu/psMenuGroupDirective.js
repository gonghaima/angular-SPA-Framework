/// <reference path="F:\Study\spaWithAngular\Steven work files\Framework\Framework\Scripts/angular.min.js" />
"use strict";

angular.module("psMenu").directive('psMenuGroup', function () {
    return {
        require: '^psMenu',
        transclude: true,
        scope: {
            label: '@',
            icon: '@'
        },
        templateUrl: "ext-modules/psMenu/psMenuGroupTemplate.html",
        link: function (scope, el, attr, ctrl) {
            scope.isOpen = false;
            scope.colseMenu = function () {
                scope.isOpen = false;
            };
            scope.clicked = function () {
                scope.isOpen = !scope.isOpen;
            };
            scope.isVertical = function () {
                return ctrl.isVertical();
            };
        }
    };
});