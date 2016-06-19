'use strict';

describe('Directive: wheelnav', function () {

  // load the directive's module and view
  beforeEach(module('mokaApp'));
  beforeEach(module('app/directives/wheelnav/wheelnav.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<wheelnav></wheelnav>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).to.equal('this is the wheelnav directive');
  }));
});
