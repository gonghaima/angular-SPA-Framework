angular.module('psFramework').run(['$templateCache', function($templateCache) {$templateCache.put('ext-modules/psFramework/psFrameworkTemplate.html','\r\n<div class="ps-title-bar">\r\n    <div class="row">\r\n        <div class="ps-logo-area col-sm-6">\r\n            <img class="ps-icon" ng-src="{{ iconFile }}" />\r\n            <div class="ps-title-area">\r\n                <p class="ps-logo-title">{{ title }}</p>\r\n                <p class="ps-logo-subtitle">{{ subtitle }}</p>\r\n            </div>\r\n\r\n            <div ng-if="isMenuButtonVisible" ng-click="menuButtonClicked()"\r\n                 class="ps-collapsed-menu pull-right">\r\n                <button type="button" class="btn ps-nav-button">\r\n                    <i class="fa fa-bars"></i>\r\n                </button>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class="ps-right-side-controls col-sm-6">\r\n            <ps-user-profile-small></ps-user-profile-small>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class="ps-menu-area"\r\n     ng-show="isMenuVisible"\r\n     ng-class="{\'ps-menu-area-vertical\': isMenuVertical, \'ps-menu-area-horizontal\': !isMenuVertical}">\r\n    <ps-user-profile></ps-user-profile>\r\n    <ng-transclude></ng-transclude>\r\n</div>\r\n\r\n<div ng-view class="ps-view"\r\n     ng-class="{\'ps-view-full-width\': !isMenuVertical || !isMenuVisible}">\r\n</div>\r\n\r\n\r\n');
$templateCache.put('ext-modules/psFramework/psUserProfile/psUserProfileSmallTemplate.html','\r\n<div class="ps-user-profile-small pull-right">\r\n    <img src="images/employee-don.png" alt="user image" />\r\n    <span>Don Morgan</span>\r\n    <button class="btn btn-default btn-sm">\r\n        <i class="fa fa-chevron-down"></i>\r\n    </button>\r\n</div>\r\n');
$templateCache.put('ext-modules/psFramework/psUserProfile/psUserProfileTemplate.html','\r\n<div class="ps-user-profile" ng-if="isMenuVertical && !isMenuButtonVisible">\r\n    <img src="images/employee-don.png" alt="user image"/>\r\n    <div>\r\n        <p>Don</p>\r\n        <p>Morgan</p>\r\n        <button class="btn btn-default btn-sm">\r\n            <i class="fa fa-chevron-down"></i>\r\n        </button>\r\n    </div>\r\n</div>\r\n');}]);