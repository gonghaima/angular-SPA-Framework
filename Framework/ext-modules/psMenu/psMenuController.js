﻿/// <reference path="F:\Study\spaWithAngular\Steven work files\Framework\Framework\Scripts/angular.min.js" />
"use strict";

angular.module("psMenu").controller('psMenuController',
    ['$scope', '$rootScope', function ($scope, $rootScope) {
        $scope.isVertical = true;
        $scope.showMenu = true;
        this.getActiveElement = function () {
            return $scope.activeElement;
        };
        this.setActiveElement = function (el) {
            $scope.activeElement = el;
        };

        this.isVertical = function () {
            return $scope.isVertical;
        };

        this.setRoute = function (route) {
            $rootScope.$broadcast('ps-menu-item-selected-event', {route: route});
        }

        this.setOpenMenuScope = function (scope) {
            $scope.openMenuScope = scope;
        };

        $scope.$on('ps-menu-show', function (evt, data) {
            $scope.showMenu = data.show;
        });
        $scope.toggleMenuOrientation = function () {

            // close any open menu
            if ($scope.openMenuScope)
                $scope.openMenuScope.closeMenu();

            $scope.isVertical = !$scope.isVertical;

            $rootScope.$broadcast('ps-menu-orientation-changed-event',
                { isMenuVertical: $scope.isVertical });
        };

        angular.element(document).bind('click', function (e) {
            if ($scope.openMenuScope && !$scope.isVertical) {
                if ($(e.target).parent().hasClass('ps-selectable-item'))
                    return;
                $scope.$apply(function () {
                    $scope.openMenuScope.closeMenu();
                });
                e.preventDefault();
                e.stopPropagation();
            }
        });
    }]);