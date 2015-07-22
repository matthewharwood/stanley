'use strict';
var app = angular.module('jordanApp');

app.controller('EditorialGridController', function ($scope, GridRow, Tout, CreateGridRow, CreateTout, CreateCta) {
  // Maximum allowed number of touts in a row
  $scope.maxToutsPerRow = 4;
 
  // $scope.textcolor = "#333";
  // $scope.bgcolor = "#FFF";
  // $scope.egclass = "egWhite";

	$scope.init = function(templateNum) {
    //alert('initialized with templateNum:'+templateNum);

    if (templateNum >= 1 && templateNum <= 9) {
      $scope.section.data = $scope.makeEGTemplate(templateNum);
    }

	};

	$scope.addGridRow = function () {
      //var idRow = $scope.gridRows.length === undefined ? 0 : $scope.gridRows.length ;
       
      var newGridRow = new GridRow();
      
      //$scope.gridRows.push({id: idRow, touts: [{'caption': 'default caption', 'subcaption': 'default subcaption', 'image_src': 'images/guy-1.3.jpeg'}]});
      $scope.section.data.push(newGridRow);
    };

    // Removes selected grid row
    $scope.removeGridRow = function (idx) {
      $scope.section.data.splice(idx,1);
    };
   
   // Toggles selected grid row scallop
    $scope.toggleGridRowScallop = function (idx) {
      var div = $scope.section.data[idx].scallop;
      if (div != 1) {
        $scope.section.data[idx].scallop = 1;
      }
      else {
        $scope.section.data[idx].scallop = 0;
      }
      console.log($scope.section.data[idx].scallop);
    };

    $scope.addTouts = function (id) {
      //$scope.gridRows[id].touts.push({'caption': 'default caption', 'subcaption': 'default subcaption', 'image_src': 'images/guy-1.3.jpeg'});
      if ($scope.section.data[id].touts.length<$scope.maxToutsPerRow) {
        var tout = new Tout();
        $scope.section.data[id].touts.push(tout);
      }
    };

    $scope.deleteTouts = function (fieldid, id) {
      $scope.section.data[fieldid].touts.splice( id, 1 );
    };

    // Listeners

    $scope.$on('newEGRow', function() {
      $scope.addGridRow();
    });
    
});




