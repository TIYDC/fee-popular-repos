(function() {
  'use strict';

  angular.module('gh')
  .controller('UserReposController', UserReposController);

  UserReposController.$inject = ['GithubService'];
  function UserReposController(GithubService) {
    let vm = this;
    vm.list = [];
    vm.user = {};

    vm.lookup = function lookup(user) {
      GithubService.getRepos(user)
      .then(function setReposOnScope(repos) {
        console.log('repos', repos);
        vm.list = repos;
      })
      .catch(function handleErrors(err) {
        console.error(err);
      });
    };
  }
})();
