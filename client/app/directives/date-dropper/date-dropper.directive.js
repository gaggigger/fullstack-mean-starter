'use strict';

angular.module('mokaApp')
  .directive('dateDropper', function () {
    return {
      template: '<input type=\"text\" />',
      restrict: 'EA',
      scope: {},
      require: 'ngModel',
      link: function(scope, elem, attr, ngModel) {
        var settings = {
          format: attr.dateFormat === void 0 ? "d/m/Y" : attr.dateFormat,
          placeholder: attr.placeholder === void 0 ? "" : attr.placeholder,
          color: attr.ddColor === void 0 ? "#1e2262" : attr.ddColor
        };
        var contents = elem.contents(); //this gives the actual injected html, and no need to use the deprecated replace: true option
        contents.dateDropper({
          lang: "en",
          format: settings.format,
          placeholder: settings.placeholder,
          animate_current: false,
          color: settings.color,
          dropperSubmit: function(value) {
            return ngModel.$setViewValue(value);
          }
        });
      }
    };
  });
