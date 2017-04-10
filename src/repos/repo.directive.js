(function() {
  'use strict';

  angular.module('gh')
    .directive('repo', repo);

    function repo(){

      return {
        templateUrl:'repos/repo.template.html',
        restrict: 'E',
        scope: {
            repo: '=',


        }
      };

    }

}());
