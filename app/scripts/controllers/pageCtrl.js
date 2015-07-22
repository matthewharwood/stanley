'use strict';
var app = angular.module('jordanApp');

app.controller('PageController', function ($scope) {

	$scope.deletePage = function() {
		var deleteInfoUrl = $scope.firebaseURL+'/pagesInfo/'+$scope.account_name+'/'+$scope.project.key+'/'+$scope.page.version+'/';

		//console.log(delete_url);
		var confirm_delete = confirm('Are you sure you want to delete ' + $scope.page.title+'?');
		if (confirm_delete) {
			//alert('blamo');
			$scope.pageInfoRef = new Firebase(deleteInfoUrl);
			//alert($scope.pageRef);
			var onInfoDeleteComplete = function(error) {
			  if (error) {
			    //alert('Synchronization failed.');
			  }
			  else {
			    //alert('Synchronization succeeded.');
			    var deleteDataUrl = $scope.firebaseURL+'/pagesData/'+$scope.page.version+'/';
			    $scope.pageDataRef = new Firebase(deleteDataUrl);
				$scope.pageDataRef.remove(onDataDeleteComplete);
			  }
			};
			var onDataDeleteComplete = function(error) {
			  if (error) {
			    //alert('Synchronization failed.');
			  }
			  else {
			    $scope.projectlistRefresh();
			  }
			};
			$scope.pageInfoRef.remove(onInfoDeleteComplete);
		}
		else {
			// Do nothing
			//alert('You live to see another day');
		}
	}
	$scope.updatePageName = function() {
		var update_url = $scope.firebaseURL+'/pagesInfo/'+$scope.account_name+'/'+$scope.project.key+'/'+$scope.page.version+'/title/';

		console.log(update_url);
		$scope.updateTitleRef = new Firebase(update_url);
		$scope.updateTitleRef.set($scope.page.title);
	};
});