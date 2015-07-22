'use strict';

var app = angular.module('jordanApp');


app.directive('card', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/_partials/card.html'
      };
  });


//http://stackoverflow.com/questions/16208899/intercepting-ng-click-in-angularjs
app.directive('confirmationNeeded', function () {
  return {
    priority: 1,
    terminal: true,
    link: function (scope, element, attr) {
      var msg = attr.confirmationNeeded || "Are you sure?";
      var clickAction = attr.ngClick;
      element.bind('click',function () {
        if ( window.confirm(msg) ) {
          scope.$eval(clickAction)
        }
        else {
        	return false;
        }
      });
    }
  };
});