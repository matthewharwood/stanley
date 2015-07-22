'use strict';
var app = angular.module('jordanApp');

// FST Controller Variables
app.controller('ToutController', function ($scope) {

	$scope.image_listen = 0;
 // CTA Child request handler/listener/rebroadcast
	$scope.$on('toutReqNewCta', function() {
    	$scope.$broadcast('newCTA');
  });

    $scope.isChecked = false;

    $scope.$watch('isChecked', function(newV){
      newV && $('#name').focus();
    },true);


    
	$scope.imageListen = function(val) {
		$scope.isCheckedMobile = false;
		$scope.isChecked = val;
	};
	$scope.imageDeaf = function(val) {
		$scope.isChecked = val;
	};
    
	$scope.toutCss = function() {
		//console.log('left:'+$scope.toutInstance.image_left );
		return {
			'zoom': $scope.toutInstance.image_scale,
			'margin-left': $scope.toutInstance.image_left +'px',
			'margin-top': $scope.toutInstance.image_top+'px'
		};
	};

    $scope.isCheckedMobile = false;

    $scope.$watch('isCheckedMobile', function(newV){
      newV && $('#name').focus();
    },true);
	$scope.imageListenMobile = function(val) {
		$scope.isChecked = false;
		$scope.isCheckedMobile = val;
	};
	$scope.imageDeafMobile = function(val) {
		$scope.isCheckedMobile = val;
	};

	$scope.toutCssMobile = function() {
		//console.log('left:'+$scope.toutInstance.image_left );
		return {
			'zoom': $scope.toutInstance.image_mobile_scale,
			'margin-left': $scope.toutInstance.image_mobile_left +'px',
			'margin-top': $scope.toutInstance.image_mobile_top+'px'
		};
	};


	$scope.changeScaleMobile = function(e) {
		var scale_delta = 1;
		if(e.shiftKey==1) {
			scale_delta = 2;
		}
		var change_delta = Number(0.01) * scale_delta;
		var move_delta = Number(5) * scale_delta;
		e.preventDefault();
		// 189/109 minus
		// 219 left bracket
		if (e.keyCode === 189 || e.keyCode === 109 || e.keyCode === 219) { 
			//scale down
	        $scope.toutInstance.image_mobile_scale = parseFloat(parseFloat(parseFloat($scope.toutInstance.image_mobile_scale) - change_delta).toFixed(2));
	        return false;
	     
	    }
		// 187/107 plus
	    // 221 right bracket
	    else if (e.keyCode === 187 || e.keyCode === 107 || e.keyCode === 221) { 
	    	//scale up
	        $scope.toutInstance.image_mobile_scale = parseFloat(parseFloat(parseFloat($scope.toutInstance.image_mobile_scale) + change_delta).toFixed(2));
	        return false;
	   
	    }
	    // left 37
	    else if (e.keyCode === 37) { 
	        $scope.toutInstance.image_mobile_left = parseInt($scope.toutInstance.image_mobile_left) - move_delta;
	        return false;
	    }
	    // right 39
	    else if (e.keyCode === 39) { 
	        $scope.toutInstance.image_mobile_left = parseInt($scope.toutInstance.image_mobile_left) + move_delta;
	        return false;
	    }
	    // up 38
	    else if (e.keyCode === 38) { 
	        $scope.toutInstance.image_mobile_top = parseInt($scope.toutInstance.image_mobile_top) - move_delta;
	        return false;

	    }
	    // down 40
	    else if (e.keyCode === 40) {
	        $scope.toutInstance.image_mobile_top = parseInt($scope.toutInstance.image_mobile_top) + move_delta;
	        return false;

	    }
	}


	$scope.changeScale = function(e) {
		var scale_delta = 1;
		if(e.shiftKey==1) {
			scale_delta = 2;
		}
		var change_delta = Number(0.01) * scale_delta;
		var move_delta = Number(5) * scale_delta;
		e.preventDefault();
		// 189/109 minus
		// 219 left bracket
		if (e.keyCode === 189 || e.keyCode === 109 || e.keyCode === 219) { 
			//scale down
	        $scope.toutInstance.image_scale = parseFloat(parseFloat(parseFloat($scope.toutInstance.image_scale) - change_delta).toFixed(2));
	        return false;
	     
	    }
		// 187/107 plus
	    // 221 right bracket
	    else if (e.keyCode === 187 || e.keyCode === 107 || e.keyCode === 221) { 
	    	//scale up
	        $scope.toutInstance.image_scale = parseFloat(parseFloat(parseFloat($scope.toutInstance.image_scale) + change_delta).toFixed(2));
	        return false;
	   
	    }
	    // left 37
	    else if (e.keyCode === 37) { 
	        $scope.toutInstance.image_left = parseInt($scope.toutInstance.image_left) - move_delta;
	        return false;
	    }
	    // right 39
	    else if (e.keyCode === 39) { 
	        $scope.toutInstance.image_left = parseInt($scope.toutInstance.image_left) + move_delta;
	        return false;
	    }
	    // up 38
	    else if (e.keyCode === 38) { 
	        $scope.toutInstance.image_top = parseInt($scope.toutInstance.image_top) - move_delta;
	        return false;

	    }
	    // down 40
	    else if (e.keyCode === 40) {
	        $scope.toutInstance.image_top = parseInt($scope.toutInstance.image_top) + move_delta;
	        return false;

	    }
	}
});
app.directive('xngFocus', function() {
    return {          
      link: function(scope, element, attrs) {
       scope.$watch(attrs.xngFocus, 
         function (newValue) { 
            newValue && element.focus();
         },true);
      }
    };
});

