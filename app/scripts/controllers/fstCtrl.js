'use strict';
var app = angular.module('jordanApp');

// FST Controller Variables
app.controller('FstController', function ($scope) {
  $scope.tempVideo = '';
  // FST Control Panel Toggle
  $scope.FSTControlPanelOpen = false;
  $scope.expandFSTControlPanel = function() {
    $scope.FSTControlPanelOpen = !$scope.FSTControlPanelOpen;
  };

  // Defaults 
  $scope.defaultFSTMargins = '50'; // Hero Margins
  $scope.fstAlign = '6'; // Right Center
  $scope.ctaAttached = true;
  $scope.fstGridClass = 'fstgrid6';
  $scope.fstHorizontalAlignCenter = 'middleRight';
  //$scope.margin = '50';

  // Margin slider control defaults
  $scope.slidersControl = {
    textTop:     12,
    marginSlider: $scope.defaultFSTMargins
  };

  // CTA Child request handler/listener/rebroadcast
	$scope.$on('reqNewCta', function() {
    $scope.$broadcast('newCTA');
  });

  // Margin slider handler
  $scope.marginSliderChange = function() {
    //console.log($scope.slidersControl.marginSlider);
    $scope.updateFSTStyle();
  };

  // FST Video Controls
  $scope.fstRemoveVideo = function(fst) {
    // Remove video
    fst.video = '';
  }
  $scope.fstChangeVideo = function(fst) {
    console.log('$scope.tempVideo -> '+$scope.tempVideo);
    var filename = new String($scope.tempVideo);
    var filenameLen = filename.length;
    // Get last /
    var slash = filename.lastIndexOf('\\');

    var file = filename.substr(slash+1,filenameLen-slash);
    console.log(fst);
    fst.video = '/videos/'+file;

    // Remove video
    //fst.video = '';
  }

  // FST Alignment Control
  // fstValue: (int) returns integer from 1-9 depending on selected grid position
  $scope.updateFSTAlign = function(fstValue) {
    $scope.fstAlign = fstValue;
    $scope.updateFSTStyle();
  };

  // refresh FST view
  $scope.updateFSTStyle = function() {
    var margin = $scope.slidersControl.marginSlider;
    var grid = $scope.fstAlign;
    //console.log('grid:' + grid+' / margin:'+margin);

    if (grid === 1) {
      $scope.fstGridClass = 'fstgrid1';
      $scope.heroBlockStyle = { 'margin': margin+'px' };
      //if (!$scope.ctaAttached) { $scope.ctaBlockStyle = { 'left': margin+'px' }; }
    }
    else if (grid === 2) {
      $scope.fstGridClass = 'fstgrid2';
      $scope.heroBlockStyle = { 'margin': margin+'px auto' };
      //if (!$scope.ctaAttached) { $scope.ctaBlockStyle = { 'width' : '100%', 'text-align':'center' }; }
    }
    else if (grid === 3) {
      $scope.fstGridClass = 'fstgrid3';
      $scope.heroBlockStyle = { 'margin': margin+'px' };
      //if (!$scope.ctaAttached) { $scope.ctaBlockStyle = { 'right': margin+'px' }; }
    }
    else if (grid === 4) {
      $scope.fstGridClass = 'fstgrid4';
      $scope.heroBlockStyle = { 'margin': 'auto '+margin+'px' };
      $scope.fstHorizontalAlignCenter = 'middleLeft';
      //if (!$scope.ctaAttached) { $scope.ctaBlockStyle = { 'left': margin+'px' }; }
    }
    else if (grid === 5) {
      $scope.fstGridClass = 'fstgrid5';
      $scope.heroBlockStyle = { 'margin': 'auto' };
      $scope.fstHorizontalAlignCenter = 'middleCenter';
      //if (!$scope.ctaAttached) { $scope.ctaBlockStyle = { 'width' : '100%',  'text-align':'center' }; }
    }
    else if (grid === 6) {

      $scope.fstGridClass = 'fstgrid6';
      $scope.heroBlockStyle = { 'margin': 'auto '+margin+'px' };
      $scope.fstHorizontalAlignCenter = 'middleRight';
      //if (!$scope.ctaAttached) { $scope.ctaBlockStyle = { 'right': margin+'px' }; }
    }
    else if (grid === 7) {
      $scope.fstGridClass = 'fstgrid7';
      $scope.heroBlockStyle = { 'margin': margin+'px' };
      //if (!$scope.ctaAttached) { $scope.ctaBlockStyle = { 'bottom': margin+'px', 'left': margin+'px' }; }
    }
    else if (grid === 8) {
      $scope.fstGridClass = 'fstgrid8';
      $scope.heroBlockStyle = { 'margin': margin+'px auto' };
      //if (!$scope.ctaAttached) { $scope.ctaBlockStyle = { 'bottom': margin+'px', 'width' : '100%', 'text-align':'center' }; }
    }
    else if (grid === 9) {
      $scope.fstGridClass = 'fstgrid9';
      $scope.heroBlockStyle = { 'margin': margin+'px' };
      //if (!$scope.ctaAttached) { $scope.ctaBlockStyle = { 'bottom': margin+'px', 'right': margin+'px' }; }
    }
  };
});
