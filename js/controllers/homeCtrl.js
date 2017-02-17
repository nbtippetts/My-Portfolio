app.controller('homeCtrl', function($scope, $location, mainService) {

    $scope.box1 = $scope.box2 = true;



    $scope.gotoElement = function (eID){
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('top');
      $location.hash('portfolio');
      $location.hash('about');
      $location.hash('contact');
      $location.hash('Knowledge');

      // call $anchorScroll()
      mainService.scrollTo(eID);

    };

});
