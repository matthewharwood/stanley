'use strict';
var app = angular.module('jordanApp');

app.controller('ProjectsListingController', function ($scope, $route, Tplsection) {
	// Get project pages
	//console.log($scope.project);
	//console.log('project listing for: '+$scope.firebaseURL+'/pages/'+$scope.account_name+'/'+$scope.project.key+'/');
	$scope.addNewVersionPage = function() {
		var new_sections = [];
	    // Load premade template
	    new_sections.push(new Tplsection('carousel',$scope.carousel2));
	    
	    new_sections.push(new Tplsection('eg',$scope.makeEGTemplate(1)));

	    var new_ts = Date.now();
	    // CREATE NEW PAGE INFO
	    $scope.newNodeRef = new Firebase($scope.firebaseURL+'/pagesInfo/'+$scope.account_name+'/'+$scope.project.key+'/'+new_ts);
	    
	    $scope.newNodeRef.once('value', function(snap) {
	      $scope.newNodeRef.set({'version':new_ts, 'title':new_ts ,'last_updated':new_ts});

	      // SAVE NEW SECTION NODE
	      $scope.newDataNodeRef = new Firebase($scope.firebaseURL+'/pagesData/'+new_ts+'/');
	      $scope.newDataNodeRef.once('value', function(snap) {
	        $scope.newDataNodeRef.child('tpl_color').set('tpl_white');
	        $scope.newDataNodeRef.child('tpl_sections').set(angular.copy(new_sections));
	        $scope.newDataNodeRef.child('last_updated').set(new_ts);
	        $scope.projectlistRefresh();
	      });
	    });

	}

	$scope.projectlistRefresh = function() {
		$scope.projectsListPagesRef = new Firebase($scope.firebaseURL+'/pagesInfo/'+$scope.account_name+'/'+$scope.project.key+'/');

		$scope.projectsListPagesRef.once('value',function(snap) {
			//console.log(snap.val());
			$scope.$apply( function() {
		      $scope.projectsListPages = angular.fromJson(snap.val());
		    });

		});
	}

	$scope.updateProjectName = function() {
		var update_url = $scope.firebaseURL+'/projects/'+$scope.account_name+'/'+$scope.project.key+'/name/';
		
		//console.log(update_url);
		$scope.updateProjNameRef = new Firebase(update_url);
		$scope.updateProjNameRef.set($scope.project.name);
	};


	$scope.updateProjectType = function() {
		var update_url = $scope.firebaseURL+'/projects/'+$scope.account_name+'/'+$scope.project.key+'/type/';
		
		//console.log(update_url);
		$scope.updateProjTypeRef = new Firebase(update_url);
		$scope.updateProjTypeRef.set($scope.project.type);
	};


	$scope.updateProjectDescription = function() {
		var update_url = $scope.firebaseURL+'/projects/'+$scope.account_name+'/'+$scope.project.key+'/description/';
		
		console.log(update_url);
		$scope.updateProjDescRef = new Firebase(update_url);
		$scope.updateProjDescRef.set($scope.project.description);
	};


	// TODO: CHANGE / FLIP Projects Listing Controller and Project Controller Nesting and Functionality
	$scope.DeleteProject = function() {
		var deleteProjectInfoUrl = $scope.firebaseURL+'/projects/'+$scope.account_name+'/'+$scope.project.key+'/';

		//console.log(deleteProjectInfoUrl);
		var confirm_delete = confirm('Are you sure you want to delete this project and all instanced versions?');
		if (confirm_delete) {
			//get data nodes
			var deleteProjPagesInfoUrl = $scope.firebaseURL+'/pagesInfo/'+$scope.account_name+'/'+$scope.project.key+'/';
			$scope.deleteProjPagesInfoRef = new Firebase(deleteProjPagesInfoUrl);

			console.log(deleteProjPagesInfoUrl);
			$scope.deleteProjPagesInfoRef.once('value', function(snap) {
				var result = snap.val();
				if (result == null) {
					//alert('nothing to delete!');
				}
				else {

					//console.log(result);
					snap.forEach(function(child) {
						// delete each data node
						var version = child.val().version;
						$scope.deleteProjPageDataUrl = $scope.firebaseURL+'/pagesData/'+version+'/';
						$scope.deleteProjPageDataRef = new Firebase($scope.deleteProjPageDataUrl);

						//console.log($scope.deleteProjPageDataUrl);
						$scope.deleteProjPageDataRef.remove();
					});
				}

				// Delete the project node
				$scope.deleteProjPagesInfoRef.remove(onProjectPagesInfoDeleteComplete);
			});
		}

		var onProjectPagesInfoDeleteComplete = function(error) {
		  if (error) {
		    //alert('Synchronization failed.');
		  }
		  else {
		   // alert('Pages Data removed!');
			$scope.deleteProjectInfoRef = new Firebase(deleteProjectInfoUrl);
			$scope.deleteProjectInfoRef.remove(refreshPage);
		  }
		};
		var refreshPage = function(error) {
			if (error) {}
			else {
				$route.reload();
			}
		}
	};

	$scope.display = function() {
		return $scope.projectsListPages;
	}

	$scope.projectlistRefresh();
});