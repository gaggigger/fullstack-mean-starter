'use strict';

describe('Service: API', function () {

  // load the service's module
  beforeEach(module('mokaApp'));

  // instantiate service
  let API;
  let things;
  beforeEach(inject(function (_API_) {
    API = _API_;
  }));

  it('should see API service was injected', function () {
    expect(!!API).to.be.true;
  });
  
});
