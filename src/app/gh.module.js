(function() {
  'use strict';

  angular.module('gh', ['ui.router'])
  .config(ghConfig);

  ghConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function ghConfig($stateProvider, $urlRouterProvider) {

    // Always send people to the same page (home page)
    // Probably not the best thing to do in the long run
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/repos/user-repos.template.html',
      controller: 'UserReposController',
      controllerAs: 'reposCtrl'
    });
  }
})();
