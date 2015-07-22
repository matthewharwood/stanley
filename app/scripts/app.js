'use strict';

angular.module('jordanApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.sortable',
  'firebase'
])
  .config(function ($routeProvider) {
    $routeProvider
      // page view
      .when('/:project/:page/:id', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })

      // account view
      .when('/', {
        templateUrl: 'views/profile.html',
        controller: 'MainCtrl'
      })


      // imagetesting
      .when('/test', {
        templateUrl: 'views/imagetest.html',
        controller: 'MainCtrl'
      })

      // packery test
      .when('/packery', {
        templateUrl: 'views/packery.html',
        controller: 'MainCtrl'
      })

      // jordan
      // account view
      .when('/:accounts', {
        templateUrl: 'views/profile.html',
        controller: 'MainCtrl'
      })

      // jordan / test
      // project view
      // TODO LATER, file manager view?
      .when('/:accounts/:page', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })


      .otherwise({
        redirectTo: '/jordan'
      });
  });
// .constant('_START_REQUEST_', '_START_REQUEST_')
  //   .constant('_END_REQUEST_', '_END_REQUEST_')
  //   .config(['$httpProvider', '_START_REQUEST_', '_END_REQUEST_', function ($httpProvider, _START_REQUEST_, _END_REQUEST_) {
  //       var $http,
  //           interceptor = ['$q', '$injector', function ($q, $injector) {
  //               var rootScope, location;

  //               function success(response) {
  //                   // get $http via $injector because of circular dependency problem
  //                   $http = $http || $injector.get('$http');
  //                   // don't send notification until all requests are complete
  //                   if ($http.pendingRequests.length < 1) {
  //                       // get $rootScope via $injector because of circular dependency problem
  //                       rootScope = rootScope || $injector.get('$rootScope');
  //                       // send a notification requests are complete
  //                       rootScope.$broadcast(_END_REQUEST_);
  //                   }
  //                   return response;
  //               }

  //               function error(response) {
  //                   // get $http via $injector because of circular dependency problem
  //                   $http = $http || $injector.get('$http');
  //                   // don't send notification until all requests are complete
  //                   if ($http.pendingRequests.length < 1) {
  //                       // get $rootScope via $injector because of circular dependency problem
  //                       rootScope = rootScope || $injector.get('$rootScope');
  //                       // send a notification requests are complete
  //                       rootScope.$broadcast(_END_REQUEST_);
  //                   }
  //                   return $q.reject(response);
  //               }

  //               return function (promise) {
  //                   // get $rootScope via $injector because of circular dependency problem
  //                   rootScope = rootScope || $injector.get('$rootScope');
  //                   // send notification a request has started
  //                   rootScope.$broadcast(_START_REQUEST_);
  //                   return promise.then(success, error);
  //               }
  //           }];

  //       $httpProvider.responseInterceptors.push(interceptor);
  //   }])
  //   // Loading directive
  //   .directive('loadingWidget', ['_START_REQUEST_', '_END_REQUEST_', function (_START_REQUEST_, _END_REQUEST_) {
  //       return {
  //           restrict: "A",
  //           link: function (scope, element) {

  //               scope.$on(_START_REQUEST_, function () {
  //                   // got the request start notification, show the element
  //                   element.show();
  //               });

  //               scope.$on(_END_REQUEST_, function () {
  //                   // got the request end notification, hide the element
  //                   element.delay(1750).fadeOut("normal").hide("normal");
                    

  //               });
  //           }
  //       };
  //   }]);
