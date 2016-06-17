'use strict';

class ToastService {
  constructor (toastr){
    this.toastr = toastr;
  }
  success (title, body){
    this.toastr.success(body, title);
  }
  info (title, body){
    this.toastr.info(body, title);
  }
  error (title, body) {
    this.toastr.error(body, title);
  }
}
angular.module('mokaApp')
  .service('ToastService', ToastService);
// function () {
//   // AngularJS will instantiate a singleton by calling "new" on this function
//
// }
