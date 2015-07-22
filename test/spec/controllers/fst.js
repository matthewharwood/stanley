'use strict';

describe('Controller: FstCtrl', function () {

  // load the controller's module
  beforeEach(module('jordanApp'));

  var FstCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FstCtrl = $controller('FstCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
