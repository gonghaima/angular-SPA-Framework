/// <reference path="F:\Study\spaWithAngular\Steven work files\Framework\Framework\Scripts/angular.min.js" />
"use strict";

angular.module("psMenu").directive('psMenuItem', function () {
    return {
        require:'^psMenu',
        scope: {
            label: '@',
            icon: '@',
            route:'@'
        },
        templateUrl: "ext-modules/psMenu/psMenuItemTemplate.html",
        link: function (scope, el, attr, ctrl) {
            el.on('click', function (evt) {
                scope.isActive = function () {
                    return el === ctrl.getActiveElement();
                };
                evt.stopPropagation();
                evt.preventDefault();
                scope.$apply(function () {
                    ctrl.setActiveElement(el);
                    ctrl.setRoute(scope.route);
                });
            });
        }
    };
});