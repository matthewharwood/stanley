'use strict';
var app = angular.module('jordanApp');

app.controller('ProjectCtrl', function ($scope, $route, $routeParams) {

	// Initialize Accounts Table
	$scope.initAccountsDatabase = function() {
	var accountsRef = new Firebase($scope.firebaseURL+'/accounts/');

	accountsRef.set({'jordan':{
						'key':'jordan',
						'name':'Nike Jordan',
						'description':'Take Flight'}});

	// Sample data:
	// {
	//   "jordan" : {
	//     "description" : "Take Flight",
	//     "name" : "Nike Jordan"
	//   }
	// }

	};


	// Initialize Projects Table
 	$scope.initProjectsDatabase = function() {
 		var projectsRef = new Firebase($scope.firebaseURL+'/projects/');

		projectsRef.set({'jordan':
							{'russell':
								{
								'key':'russell',
								'name':'Russell Westbrook',
								'type':'Concept art & technology direction',
								'description':'Project X launches January 31st 2014, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus, sapien eget vestibulum bibendum, nunc justo pharetra erat, non laoreet turpis sem vitae nibh. Donec semper massa ipsum. Nulla consequat in velit eget vulputate.'
								}
							,
							'ajxx9':
								{
								'key':'ajxx9',
								'name':'AJXX9',
								'type':'April Launch',
								'description':'Project AJXX9 launches January 31st 2014, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus, sapien eget vestibulum bibendum, nunc justo pharetra erat, non laoreet turpis sem vitae nibh. Donec semper massa ipsum. Nulla consequat in velit eget vulputate.'
								}
							,

							'test':
								{
								'key':'test',
								'name':'test',
								'type':'Testing',
								'description':'This project is for testing. Yo.'
								}
							}
						});

		// Sample data: 
		// {
		//   "jordan" : {
		//     "russel" : {
		//       "type" : "Concept art & technolog direction",
		//       "description" : "Project X launches January 31st 2014, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus, sapien eget vestibulum bibendum, nunc justo pharetra erat, non laoreet turpis sem vitae nibh. Donec semper massa ipsum. Nulla consequat in velit eget vulputate.",
		//       "name" : "Russel Westbrook"
		//     },
		//     "test" : {
		//       "type" : "Testing",
		//       "description" : "This project is for testing. Yo.",
		//       "name" : "test"
		//     },
		//     "ajxx9" : {
		//       "type" : "April Launch",
		//       "description" : "Project AJXX9 launches January 31st 2014, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus, sapien eget vestibulum bibendum, nunc justo pharetra erat, non laoreet turpis sem vitae nibh. Donec semper massa ipsum. Nulla consequat in velit eget vulputate.",
		//       "name" : "AJXX9"
		//     }
		//   }
		// }

	}

	$scope.AddNewProject = function() {
		// Creates Project Info in /projects
			var new_ts = Date.now();
		$scope.newProjectRef = new Firebase($scope.firebaseURL+'/projects/'+$scope.account_name+'/ProjectKey'+new_ts);
		$scope.newProjectRef.once('value', function(snap) {
			$scope.newProjectRef.child('key').set('ProjectKey'+new_ts);
			$scope.newProjectRef.child('created').set(new_ts);
			$scope.newProjectRef.child('name').set('NewProject'+new_ts);
			$scope.newProjectRef.child('type').set('Project Type');
			$scope.newProjectRef.child('description').set('Enter project description');
			$route.reload();
		});
	};

	// INITIAL TEMPLATE DATABASE INITIALIZATION
	//$scope.initAccountsDatabase();

	// INITIAL PROJECTS DATABASE INITIALIZATION
	//	$scope.initProjectsDatabase();

	// Assume we are in an account path/

  	//$scope.account_name = $routeParams.accounts;
  	$scope.account_name = 'jordan';
  	// console.log($routeParams);
  	// console.log($scope.firebaseURL+'/projects/'+$scope.account_name);
 	$scope.projectsListRef = new Firebase($scope.firebaseURL+'/projects/'+$scope.account_name);
 	$scope.projectsListRef.once('value', function(snap) {
	    $scope.$apply( function() {
	      $scope.projectsListing = angular.fromJson(snap.val());
	    });
	  });
});