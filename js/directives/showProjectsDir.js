app.directive('showProjectsDir', function() {
  return {
    restrict: 'AE',
    scope:{
      isOpen: "=showProjectsDir" // 'data-slide-toggle' in our html
    },
    link: function(scope, element, attr) {
      // Watch for when the value bound to isOpen changes
      // When it changes trigger a slideToggle
      scope.$watch('isOpen', function(showWeb, showGame){

        $(function show() {
          var showWeb = $('#div1').hide();
          var showGame = $('#div2').hide();

          $('#web-btn').on('click', function() {
            showWeb.show()
            showGame.hide();
          });

          $('#games-btn').on('click', function() {
            showWeb.hide()
            showGame.show()
          });
        });
      });
    }
  };
})
