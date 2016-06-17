'use strict';

(function() {

  class MainController {

    constructor($http) {
      this.$http = $http;
      this.awesomeThings = [];
    }

    $onInit() {
      this.$http.get('/api/things')
        .then(response => {
          this.awesomeThings = response.data;
        });
    }

    addThing() {
      if (this.newThing) {
        this.$http.post('/api/things', {
          name: this.newThing
        }).then(resp => {
          this.updateThings(resp.data);
        })
        ;
        this.newThing = '';
      }
    }

    deleteThing(thing) {
      this.$http.delete('/api/things/' + thing._id);
      this.updateThings(thing);
    }
    updateThings(thing){
      let indexOfThing = this.awesomeThings.indexOf(thing);
      if(indexOfThing === -1){
        this.awesomeThings.push(thing);
      }else{
        this.awesomeThings.splice(this.awesomeThings.indexOf(thing), 1);
      }
    }
  }

  angular.module('mokaApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
