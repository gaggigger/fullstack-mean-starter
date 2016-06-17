'use strict';
(function(){

class LoginComponent {
  constructor(toastr, ToastService, API) {
    this.message = 'Hello';
    this.toastr  =  toastr;
    this.ToastService = ToastService;
    this.API  = API;
  }

  login(){
    // this.toastr.success('Hello world!', 'Toastr fun!');
    
  }
}

angular.module('mokaApp')
  .component('login', {
    templateUrl: 'app/login/login.html',
    controller: LoginComponent
  });

})();
