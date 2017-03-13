var app = angular.module('portfolio', ['ngRoute', 'ui.router', 'ngAnimate'])  //ui.router is awesome


  app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state('loading', {
        url: '/',
        templateUrl: 'views/loading.html',
        controller: 'loadingCtrl'
      })

      .state('home', {
        url: '/home',
        abstract: true,
        templateUrl: 'views/home.html',
        controller: 'homeCtrl'
      })

      .state('home.contact', {
        url: '/contact',
        templateUrl: 'views/contact.html'
      })

      .state('home.details', {
        url: '/details',
        templateUrl: 'views/details.html'
      })

      .state('social', {
        url: '/social',
        templateUrl: 'views/social.html'
      })

      .state('drumkit', {
        url: '/drumkit',
        templateUrl: 'views/drumkit.html'
      })

      .state('clock', {
        url: '/clock',
        templateUrl: 'views/clock.html'
      })

      .state('cssvars', {
        url: '/cssvars',
        templateUrl: 'views/cssvars.html'
      })

      .state('photogallery', {
        url: '/photogallery',
        templateUrl: 'views/photogallery.html'
      })

      .state('typeAhead', {
        url: '/typeAhead',
        templateUrl: 'views/typeAhead.html'
      })

      .state('htmlCanvas', {
        url: '/htmlCanvas',
        templateUrl: 'views/htmlCanvas.html'
      })

      .state('checkbox', {
        url: '/checkbox',
        templateUrl: 'views/checkbox.html'
      })

      .state('customVideoPlayer', {
        url: '/customVideoPlayer',
        templateUrl: 'views/customVideoPlayer.html'
      })

      .state('mouseShadow', {
        url: '/mouseShadow',
        templateUrl: 'views/mouseShadow.html'
      })

      .state('webCam', {
        url: '/webCam',
        templateUrl: 'views/webCam.html',
        controller: 'webCamCtrl'
      })


      $urlRouterProvider
       .otherwise('/');

});

// .state('settings', {
//             url: '/settings',
//             abstract:true,
//             templateUrl: 'templates/settings.html'
//         })
//         .state('settings.profile', {
//             url: '/profile',
//             templateUrl: 'templates/profile.html'
//         })
//         .state('settings.account', {
//             url: '/account',
//             templateUrl: 'templates/account.html'
//         });
//
//     $urlRouterProvider.otherwise('/settings/profile');
