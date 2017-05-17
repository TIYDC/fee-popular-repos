(function() {
  'use strict';

  angular.module('gh')
  .filter('popularity', popularity);

  function popularity() {

    /**
    * Uses repos array and sorts it according to popularity
    * @param  {Array} repos array data from the api
    * @return {Array}       returns either a -1, 1, or 0
    */
    return function mostPopular(repos) {
      if (!Array.isArray(repos)) {
        return repos;
      }
      return [].concat(repos).sort(function sort(firstRepo, secondRepo) {
        let firstCopy = (firstRepo.stargazers_count) + (2 * firstRepo.forks_count) + (firstRepo.open_issues_count / 2);
        let secondCopy = (secondRepo.stargazers_count) + (2 * secondRepo.forks_count) + (secondRepo.open_issues_count / 2);
        return secondCopy - secondCopy;
      });
    };
  }
}());
