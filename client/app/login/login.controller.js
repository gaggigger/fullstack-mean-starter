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
    let user = {
      email: this.email,
      password: this.password
    };
    // this.toastr.success('Hello world!', 'Toastr fun!');
    this.API.all('users/auth/login').post(user).then((resp)=>{
      console.log(resp.data);
    });
  }
  authenticate(provider){
    // this.$auth.authenticate(provider);
  }
}

angular.module('mokaApp')
  .component('login', {
    templateUrl: 'app/login/login.html',
    controller: LoginComponent
  });

})();
