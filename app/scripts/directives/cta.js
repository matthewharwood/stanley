'use strict';
/* jshint expr: true */
var app = angular.module('jordanApp');

app.directive('ctacontrol', function () {
    return function(scope, element) {
        element.bind('mouseenter', function() {
            element.addClass('active');
          }),

          element.bind('mouseleave', function() {
          element.removeClass('active');
        });
      };
  });

app.directive('attachcta', function () {
    return function(scope, element, attrs) {
        element.bind('click', function() {
            scope.$apply(attrs.attachcta);
          });
      };
  });


app.directive('addctadialog', function () {
        return {
            restrict: 'E',
            scope: {
                text: '@'
              },
              template: '<i alt="AddCTA" class="iconAction fa fa-plus-square" ng-click="fstRequestsNewCTA()"></i>',
              controller: function ($scope) {
                $scope.fstRequestsNewCTA = function() {
                        $scope.$emit('reqNewCta');
                      };
              }
            };
      });

app.directive('toutaddctadialog', function () {
        return {
            restrict: 'E',
            scope: {
                text: '@'
              },
              template: '<i alt="AddCTA" class="fa fa-plus-square" ng-click="toutRequestsNewCTA()"><span>Add Button</span></i>',
              controller: function ($scope) {
                $scope.toutRequestsNewCTA = function() {
                        $scope.$emit('toutReqNewCta');
                      };
              }
            };
      });

// Creates array of CTAs + CTA Controller + Buttons
app.directive('ctapanel', function() {
    return {
        restrict: 'E',
        scope: {
          initialCTA: '=initial',
          maxCTA: '=max',
          cta: '=cta'
        },
        templateUrl: 'views/_partials/ctapanel.html'
      };
  });

// Creates CTA Color Change Control Panel for each CTA
app.directive('colorctapanel', function() {
    return {
        restrict: 'EA',
        templateUrl: 'views/_partials/ctaColorPanel.html',
        
        link:function ($scope) {
            $scope.setCtaColor = function (color) {
                $scope.ctaitem.ctaclass = color;
              };
          }
      };
  });
