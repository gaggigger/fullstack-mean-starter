'use strict';

describe('Component: TestmeComponent', function () {

  // load the controller's module
  beforeEach(module('mokaApp'));

  var TestmeComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    TestmeComponent = $componentController('TestmeComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
