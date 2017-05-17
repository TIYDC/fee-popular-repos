(function() {
  'use strict';

  angular.module('gh')
  .directive('repos', Repos);

  /**
  * Constructor for the repo directive
  * @return {Object} Template and scope object representing the directive
  */
  function Repos() {

    return {
      templateUrl: 'repos/repo.template.html',
      restrict: 'E',
      scope: {
        repo: '=repo'
      },
      link: setUpCollapse
    };

    function setupCollapse(scope, element) {
      $(element)
      .find('header')
      .on('click', function togglePanelBody() {
        $(element).find('article').toggleClass('hidden');
      });
    }
  }
}());
