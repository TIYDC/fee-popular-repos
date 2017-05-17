(function() {
  'use strict';

  angular.module('gh')
  .controller('HeaderController', HeaderController);

  HeaderController.$inject = ['GithubService'];
  function HeaderController(GithubService) {
    let vm = this;
    vm.token = GithubService.getUserToken() || '';

    vm.saveToken = function saveToken() {
      GithubService.setUserToken(vm.token);
    };
  }
})();
