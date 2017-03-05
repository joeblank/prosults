angular.module('prosults', ['ui.router'])
.config(($stateProvider, $urlRouterProvider) => {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: './app/home/home.html',
    controller: 'mainCtrl'
  })





})
