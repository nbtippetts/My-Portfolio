angular.module('portfolio').controller('loadingCtrl', ['$scope', '$state', '$timeout',

  function($scope, $state, $timeout) {
    $timeout(function() {
      $state.go('home.contact');
    }, 7000);

    }])
