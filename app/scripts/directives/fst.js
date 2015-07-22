'use strict';

var app = angular.module('jordanApp');

// Creates control panel for Full Screen Touts / FSTs
// FST Control Panel Component: Main panel
app.directive('fstcontrolpanel', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/_partials/fstControlPanel.html'
      };
  });


// FST Control Panel Component: Alignment Box Panels
app.directive('alignmentboxpanels', function () {
  return {
      scope: {
          updateHandler: '=update',
          alignVar: '=fstAlign'
        },
      restrict: 'E',
      replace: true,
      template: '<div class="alignment-box" ng-repeat="alignment in [1,2,3,4,5,6,7,8,9]" ng-click="updateHandler(alignment)" ng-class="(alignVar==alignment)? \'active\':\'\'"></div>'
    };
});

app.directive('videocontrolpanel', function() {
    return {
        restrict: 'E',
        //templateUrl: 'views/_partials/fstVideoControlPanel.html'
        //<i alt="Video" class="iconAction fa fa-times" ng-click="fstRemoveVideo(fst)"></i>
        template: '<input type="file" style="margin-left: 14px; overflow: hidden;color: transparent;width: 32px;height: 32px;" ng-model="tempVideo" ng-change="fstChangeVideo(fst)" class="file-uploading"/>'
      };
  });

app.directive('removevideo', function() {
    return {
        restrict: 'E',
        //templateUrl: 'views/_partials/fstVideoControlPanel.html'
        //<i alt="Video" class="iconAction fa fa-times" ng-click="fstRemoveVideo(fst)"></i>
        template: '<div ng-click="fstRemoveVideo(fst)"><i class="fa fa-times"></i></div>'
      };
  });

app.directive('removefst', function() {
    return {
        restrict: 'E',
        //templateUrl: 'views/_partials/fstVideoControlPanel.html'
        //<i alt="Video" class="iconAction fa fa-times" ng-click="fstRemoveVideo(fst)"></i>
        template: '<div ng-click="removeFST($index)"><i class="fa fa-times"></i></div>'
      };
  });