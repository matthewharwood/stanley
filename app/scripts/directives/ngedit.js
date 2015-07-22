'use strict';
/* jshint expr: true */
var app = angular.module('jordanApp');
    
app.directive('ngEnter', function() {
    return function(scope, elm, attrs) {
      elm.bind('keypress', function(e) {
        if (e.charCode === 13) {
          scope.$apply(attrs.ngEnter);
        }
      }),
        elm.bind('blur', function() {
          scope.$apply(attrs.ngEnter);
        });
    };
  });

app.directive('inlineEdit', function() {
    return {
        restrict: 'E',
        // can be in-lined or async loaded by xhr
        // or inlined as JS string (using template property)
        templateUrl: 'componentTpl.html',
        scope: {
            model: '=',
            version: '@',
            subcaption: '@'
          }
        };
  });


app.directive('inlinePageNameEdit', function() {
    return {
        restrict: 'E',
        // can be in-lined or async loaded by xhr
        // or inlined as JS string (using template property)
         templateUrl: 'inlinePageName.html'//,
        // scope: {
        //     model: '=',
        //     version: '@',
        //     blur: '@'
        //   }
        };
  });

app.directive('inlineProjectNameEdit', function() {
    return {
        restrict: 'E',
        // can be in-lined or async loaded by xhr
        // or inlined as JS string (using template property)
         templateUrl: 'inlineProjectName.html'//,
        // scope: {
        //     model: '=',
        //     version: '@',
        //     blur: '@'
        //   }
        };
  });

app.directive('inlineProjectTypeEdit', function() {
    return {
        restrict: 'E',
        // can be in-lined or async loaded by xhr
        // or inlined as JS string (using template property)
         templateUrl: 'inlineProjectType.html'//,
        // scope: {
        //     model: '=',
        //     version: '@',
        //     blur: '@'
        //   }
        };
  });

app.directive('inlineProjectDescriptionEdit', function() {
    return {
        restrict: 'E',
        // can be in-lined or async loaded by xhr
        // or inlined as JS string (using template property)
         templateUrl: 'inlineProjectDescription.html'//,
        // scope: {
        //     model: '=',
        //     version: '@',
        //     blur: '@'
        //   }
        };
  });






