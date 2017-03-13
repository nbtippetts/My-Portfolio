app.directive('slideDir', function() {
  return {
    restrict: 'AE',
    replace: true,
    scope: {
      games: '='
    },
    link: function(scope, elem, attrs) {

      $(function leftNav() {

        var navOpen = $('#btn-nav-open').show();
        var navClose = $('#btn-nav-close').hide();

        $('.navbar-nav [data-toggle="tooltip"]').tooltip();
        $('#btn-nav-open').on('click', function(event) {
           //console.log($('#btn-nav-open'));
            event.preventDefault();
            $('.navbar-twitch').toggleClass('open');

            if (navOpen !== navClose) {
              navOpen.hide();
              navClose.show();
            }
        });

        $('#btn-nav-close').on('click', function(event) {
          console.log($('#btn-nav-close'));
            event.preventDefault();
            $('.navbar-twitch').toggleClass('open');

            if (navClose !== navOpen) {
              navClose.hide();
              navOpen.show();
            }
        });

        $('.nav-style-toggle').on('click', function(event) {
            event.preventDefault();
            var $current = $('.nav-style-toggle.disabled');
            $(this).addClass('disabled');
            $current.removeClass('disabled');
            $('.navbar-twitch').removeClass('navbar-'+$current.data('type'));
            $('.navbar-twitch').addClass('navbar-'+$(this).data('type'));
        });
      })

      $(function animateElems() {
          var game = $('#games-btn').hide();
          var web = $('#web-btn').hide();
          var jsProjects = $('#jsProjects-btn').hide();
          var $top_nav = $('#top-nav');
          var $side_nav = $('#side-nav').hide();
          var $animation_elements = $('.animation-element');
          var $window = $(window);

          function check_if_in_view() {
            var window_height = $window.height();
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height);

          $.each($animation_elements, function() {
               var $element = $(this);
               var element_height = $element.outerHeight();
               var element_top_position = $element.offset().top;
               var element_bottom_position = (element_top_position + element_height);

             //check to see if this current container is within viewport
             if ((element_bottom_position >= window_top_position) &&
                 (element_top_position <= window_bottom_position)) {
                   $element.addClass('in-view');
             } else {
               $element.removeClass('in-view');
             }

             if (window_top_position > 60){
               //console.log($side_nav, $top_nav);
               $side_nav.fadeIn(1000);
               $top_nav.fadeOut(500);
             } else {
               $side_nav.fadeOut(500);
               $top_nav.fadeIn(1000);
             }

             if (window_top_position > 1200){
               game.show();
               web.show();
               jsProjects.show();
             } else {
               game.hide();
               web.hide();
               jsProjects.hide();
             }
          });
        }
        //   function compare(a,b) {
//   if (a.name < b.name)
//     return -1;
//   if (a.name > b.name)
//     return 1;
//   return 0;
//   }
// collection.sort(compare);

        $window.on('scroll resize', check_if_in_view);
        $window.trigger('scroll');
      });
    }
  }
})
