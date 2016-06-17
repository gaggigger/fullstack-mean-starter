'use strict';

describe('Component: mainComponent', function() {

  // load the controller's module
  beforeEach(module('mokaApp'));
  beforeEach(module('stateMock'));

  let scope;
  let mainComponent;
  let state;
  let $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(_$httpBackend_, $http, $componentController, $rootScope, $state) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/things')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    state = $state;
    mainComponent = $componentController('main', {
      $http: $http,
      $scope: scope
    });
  }));

  it('should attach a list of things to the controller', function() {
    mainComponent.$onInit();
    $httpBackend.flush();
    expect(mainComponent.awesomeThings.length)
      .to.equal(4);
  });
});
