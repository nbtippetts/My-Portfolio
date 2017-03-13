angular.module('portfolio').controller('loadingCtrl', ['$scope', '$state', '$timeout',

  function($scope, $state, $timeout) {
    var bye = $timeout(function() {
      $state.go('home.contact');
    }, 0);

    $scope.$on('$destroy', function() {
      $timeout.cancel(bye);
    })

}])
