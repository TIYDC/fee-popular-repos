(function() {
  'use strict';

  angular.module('gh')
  .directive('repo', repo);

  /**
  * Constructor for the repo directive
  * @return {Object} Template and scope object representing the directive
  */
  function repo() {

    return {
      templateUrl: 'repos/panel.template.html',
      restrict: 'EA',
      scope: {
        repo: '=repo'
      }
    };
  }
}());
