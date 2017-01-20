app.directive('slideShowDir', function($timeout) {
  return {
    restrict: 'AE',
    replace: true,
    scope: {
      images: '='
    },
    link: function(scope, elem, attrs) {
      templateUrl: 'views/home.html'
      scope.currentIndex = 0;

      scope.next = function() {
        scope.currentIndex < scope.images.length-1 ? scope.currentIndex++ : scope.currentIndex = 0;
      }

      scope.$watch('currentIndex', function() {
        scope.images.forEach(function(image) {
          image.visible = false;
        })
        scope.images[scope.currentIndex].visible = true;
      })

      var timer;
      var slideFunc = function() {
        timer = $timeout(function() {
          scope.next();
          timer = $timeout(slideFunc, 4000);
        }, 4000)
      };

      slideFunc();

      scope.$on('$destroy', function() {
        $timeout.cancel(timer);
      });
    }
  }
})
