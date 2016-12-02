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

      .state('sonic', {
        url: '/sonic',
        templateUrl: 'views/sonic.html'
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
