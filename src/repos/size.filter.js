(function() {
  'use strict';

  angular.module('gh')
  .filter('size', size);

  /**
  * Determines the repo size in MBs
  * @param  {Number} repo Number data pulled from the repo
  * @return {Number}
  */
  function size() {
    return function thisSize(repo) {
      let theSize = repo / 1000;
      return theSize.toFixed(2) + ' MBs';
    };
  }
}());
