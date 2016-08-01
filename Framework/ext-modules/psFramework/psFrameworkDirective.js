/// <reference path="F:\Study\spaWithAngular\Steven work files\Framework\Framework\scripts/angular.min.js" />
"use strict";
angular.module("psFramework").directive("psFramework", function () {
    return {
        transclude: true,
        scope: {},
        controller: "psFrameworkController",
        templateUrl:"ext-modules/psFramework/psFrameworkTemplate.html"
    };
});