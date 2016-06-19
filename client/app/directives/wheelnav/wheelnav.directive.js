'use strict';

class WheelnavController {
  constructor(){
    // console.log(jQuery())
    // var ngConfig = {
    //   text: "mola"
    // };
    let wheel = new wheelnav(
      {
        divId: "divWheel",
        divWidth: 800,
        divHeight: 800,
        dataWheelNav: true,
        // slicePath: "DonutSlice",
        // colors:  "#E34C26,#F06529",
        radius: 250,
        // angle: 360,
        // spreader: true,
        // spreaderRadius: 50,
        // spreaderPath: "AntiStarSpreader",
        // marker:  true,
        // markerPath: "DropMarker",
        // titleWidth: 50,
        // titleHeight: 650,
        // init: true
        // rotateOff: true
        // children: [
        //   {text: "d"},
        //   {text: "@"},
        //   {text: "smile"},
        //   {text: "1"}
        // ]
    });
    wheel.slicePathFunction = slicePath().PieSlice;
    wheel.markerPathFunction = markerPath().DropMarker;
    wheel.markerAttr = { fill: '#333', stroke: '#333' };
    wheel.clickModeRotate = false;
    wheel.colors = ['#497F4C'];
    wheel.markerEnable = true;
    wheel.createWheel(['default', 'pie', 'menu', 'line', 'drop']);
  }
}
angular.module('mokaApp')
  .directive('wheelnav', function () {
    return {
      templateUrl: 'app/directives/wheelnav/wheelnav.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {

      },
      controller: WheelnavController
    };
  });
