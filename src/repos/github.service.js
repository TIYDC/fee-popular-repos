(function() {
  'use strict';

  angular.module('gh')
  .factory('GithubService', GithubService);

  GithubService.$inject = ['$http'];

  function GithubService($http) {
    let _token = localStorage.getItem('gh-token') || null;

    function setUserToken(token) {
      _token = token;
      localStorage.setItem('gh-token', token);
    }

    function getUserToken() {
      return _token;
    }

    function getRepos(user) {
      if (!_token || !_token.length) {
        console.warn('no token!');
        return Promise.reject('Please enter your token first');
      }

      if (!user || !user.length) {
        console.warn('no username!');
        return Promise.reject('Please enter the desired username to look for.');
      }

      return $http({
        url: `https://api.github.com/users/${user}/repos`,
        headers: {
          Authorization: 'token ' + _token
        }
      }).then(function handleResponse(response) {
        console.log('Response from GitHub:', response);
        response.data.forEach(function makePopularityProperty(repo) {
          repo.popularity = repo.stargazers_count + (2 * repo.forks) + (0.5 * repo.open_issues_count);
        });
        return response.data;
      }).catch(function handleError(err) {
        console.error('Error retrieving repos: ', err);
      });
    }

    return {
      setUserToken: setUserToken,
      getUserToken: getUserToken,
      getRepos: getRepos
    };
  }
})();
