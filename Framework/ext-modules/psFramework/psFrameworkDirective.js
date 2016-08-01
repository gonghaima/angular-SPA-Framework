"use strict";

angular.module("psFramework").directive("psFramework", function () {
    return {
        transclude: false,
        scope: {

        },
        controller: "psFrameworkController",
        templateUrl: "ext-modules/psFramework/psFrameworkTemplate.html"
        
    };
});