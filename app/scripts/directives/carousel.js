'use strict';
var app = angular.module('jordanApp');

app.directive('carouselfst', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/_partials/carouselfst.html'
      };
  });
app.directive('carouselvideo', function() {
    return {
        restrict: 'E',
        template: '<video preload="true" loop="loop" muted="true" autoplay><source src="{{carousel[i].video}}" type="video/mp4">Your browser does not support the video tag.</video>'
      };
  });
