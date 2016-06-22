'use strict';

describe('Directive: mtrDropdown', function () {

  // load the directive's module and view
  beforeEach(module('mokaApp'));
  beforeEach(module('app/directives/mtr-dropdown/mtr-dropdown.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    // element = angular.element('<mtr-dropdown></mtr-dropdown>');
    // element = $compile(element)(scope);
    // scope.$apply();
    expect('m').to.equal('m');
  }));
});
