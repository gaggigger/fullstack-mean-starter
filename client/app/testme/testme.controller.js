'use strict';
(function(){

class TestmeComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('mokaApp')
  .component('testme', {
    templateUrl: 'app/testme/testme.html',
    controller: TestmeComponent
  });

})();
