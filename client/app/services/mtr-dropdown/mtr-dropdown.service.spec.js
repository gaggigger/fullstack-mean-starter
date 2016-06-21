'use strict';

describe('Service: mtrDropdown', function () {

  // load the service's module
  beforeEach(module('mokaApp'));

  // instantiate service
  var mtrDropdown;
  beforeEach(inject(function (_mtrDropdown_) {
    mtrDropdown = _mtrDropdown_;
  }));

  it('should do something', function () {
    expect(!!mtrDropdown).to.be.true;
  });

});
