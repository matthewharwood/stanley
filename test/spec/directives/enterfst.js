'use strict';

describe('Directive: enterFST', function () {

  // load the directive's module
  beforeEach(module('jordanApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<enter-f-s-t></enter-f-s-t>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the enterFST directive');
  }));
});
