(function() {
  'use strict';

  angular.module('gh')
  .directive('repo', repo);

  /**
  * Creates the repos directive
  * @return {Object} Object containing the template and scope of the directive
  */
  function repos() {

    return {
      templateUrl: 'repos/panel.template.html',
      restrict: 'EA',
      scope: {
        repo: '=repo',
        list: 'repos'
      }
    };
  }
}());
