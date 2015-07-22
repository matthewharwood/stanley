'use strict';
var app = angular.module('jordanApp');

// CTA Generator - populates default CTA
app.controller('CtaPanelController', function ($scope, CreateCta) {
    // Default max cta list
    $scope.ctaMax=5;
    // I am the list of friends to show.
    $scope.ctaList = [];
    $scope.ctaList.push(new CreateCta('Grey CTA','metalicGray'));
    $scope.ctaList.push(new CreateCta('Red CTA','red'));

    $scope.init = function(numInitialize, newMax, cta) {
      if (cta !== undefined) {
        $scope.ctaList = cta;
      }
      else {
        //This function is sort of private constructor for controller
        if (numInitialize == 2) {

          $scope.ctaList = [];
          $scope.ctaList.push(new CreateCta('Grey CTA','metalicGray'));
          $scope.ctaList.push(new CreateCta('Red CTA','red'));
           
        }
        else if (numInitialize == 1) {
            $scope.ctaList = [
            {
                ctaclass: 'metalicGray',
                text: 'Grey CTA'
              }];
        }

        else {
            //alert("initialized with: "+ numInitialize);
            $scope.ctaList = [];
        }
      }
      $scope.ctaMax = newMax;
    }

    $scope.addCTA = function() {
      //alert("new cta request; length:"+$scope.ctaList.length +' max:'+$scope.ctaMax);
      if ($scope.ctaList.length<$scope.ctaMax){
        $scope.ctaList.push(new CreateCta('New CTA','red'));
      }
    };

    $scope.deleteCTA = function(idx) {
        $scope.ctaList.splice(idx,1);
    };

    $scope.$on('newCTA', function() {
      $scope.addCTA();
    });

  });

// CTA Color Controls
app.controller('CtaColorCtrl', function ($scope) {
    // I am the list of friends to show.
    $scope.colorCTA = 'metalicGray';
  });
