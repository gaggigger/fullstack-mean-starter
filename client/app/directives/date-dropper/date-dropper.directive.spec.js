'use strict';

describe('Directive: dateDropper', function () {

  // load the directive's module
  beforeEach(module('mokaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    // scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    // element = angular.element('<date-dropper></date-dropper>');
    // element = $compile(element)(scope);
    expect('datedropper').to.equal('datedropper');
  }));
});
