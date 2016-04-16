app.directive('contenteditable', ['$sce', function($sce) {
  return {
    restrict: 'A',
    require: '?ngModel',
    link: function(scope, element, attrs, ngModel) {
      if (!ngModel) {
        return;
      }

      read(); // initialize

      ngModel.$render = function() {
        element.html($sce.getTrustedHtml(ngModel.$viewValue || ''));
      };

      element.on('blur', function() {
        scope.$apply(update);
      });

      function read() {
        var html = element.html();
        if(attrs.stripBr && html == '<br>') {
          html = '';
        }
        ngModel.$render();
      }

      function update() {
        var html = element.html();
        if ( attrs.stripBr && html == '<br>' ) {
          html = '';
        }
        ngModel.$setViewValue(html);
      }
    }
  };
}]);