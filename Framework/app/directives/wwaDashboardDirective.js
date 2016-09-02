"use strict";

angular.module('app').directive('wwaDashboard', [function () {
    return {
        scope: {
        },
        template: '<ps-dashboard></ps-dashboard>',
        link: function (scope) {
            scope.widgets = [
                {
                    sizeX: 3,
                    sizeY: 3,
                    row: 0,
                    col: 0
                },
                {
                    sizeX: 2,
                    sizeY: 4,
                    row: 0,
                    col: 5
                }
            ];
        }
    }
}]);