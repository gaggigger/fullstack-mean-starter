'use strict';
class MtrDropdownController{
  constructor(){

  }
  $onInit(){
    this.childMenuVisibility = false;
    this.mtrOptions = [
      {text: "My First Option"},
      {text: "My First Option"},
      {text: "with icon ", hasIcon: true, icon: "ion-ionic"}
    ];
    console.log(this.mtrOptions);
  }
}
angular.module('mokaApp')
  .directive('mtrDropdown', function () {
    return {
      templateUrl: 'app/directives/mtr-dropdown/mtr-dropdown.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      },
      controller: MtrDropdownController,
      controllerAs: 'vm'
    };
  });
