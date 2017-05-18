(function() {
  'use strict';

  angular.module('gh')
  .filter('popularity', popularity);

  function popularity() {

    /**
    * Sorts repos[] returned from github api according to a chosen popularity calculation: (Number of stars + twice the number of forks + half the number of open issues)
    * @param  {Array} repos array of repos from github api
    * @return {Array}       returns the sorted repos[] based on popularity count (calculated in service)
    */
    return function poularitySort(repos) {
      if (!Array.isArray(repos)) {
        return repos;
      }

      let reposCollection = [].concat(repos);

      return reposCollection.sort(function sortRepos(firstRepo, secondRepo) {
        return secondRepo.popularity - firstRepo.popularity;
      });
    };
  }
}());
