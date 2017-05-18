(function() {
  'use strict';

  angular.module('gh')
  .filter('size', size);

  /**
  * Determines the repo size in MBs
  * @param  {Number} repoSize Number data pulled from the repo
  * @return {Number}
  */
  function size() {
    return function thisSize(repoSize) {
      let theSize = repoSize / 1000;
      return theSize.toFixed(4) + ' MBs';
    };
  }
}());
