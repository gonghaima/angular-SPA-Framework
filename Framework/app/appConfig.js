/// <reference path="F:\Study\spaWithAngular\Steven work files\Framework\Framework\Scripts/angular.min.js" />
angular.module("app").config(function ($provide) {
    $provide.decorator("$exceptionHandler", ["$delegate", function ($delegate) {
        return function (exception, cause) {
            $delegate(exception, cause);
            alert(exception.message);
        };
    }]);
});