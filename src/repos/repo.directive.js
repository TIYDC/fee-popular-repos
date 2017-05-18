(function() {
  'use strict';

  angular.module('gh')
  .directive('repo', Repo);

  /**
  * Constructor for the repo directive
  * @return {Object} Template and scope object representing the directive
  */
  function Repo() {

    return {
      templateUrl: 'repos/repo.template.html',
      restrict: 'E',
      scope: {
        repo: '='
      },
      link: setupCollapse
    };

    function setupCollapse(scope, element) {
      let $ = angular.element;
      $(element)
      .find('header')
      .on('click', function togglePanelBody() {
        $(element).find('article').toggleClass('hidden');
      });
    }
  }
}());
