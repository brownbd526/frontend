'use strict';

angular.module('app')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/people/:id', {
        templateUrl: 'pages/people/activity.html',
        controller: 'PeopleShow'
      });
  })
  .controller('PeopleShow', function ($scope, $routeParams, $api, $pageTitle) {
    $scope.person = $api.person_get($routeParams.id);

    $scope.person.then(function(person){
      $pageTitle.set(person.display_name, 'Profile');
    });

    $scope.timeline = $api.person_activity($routeParams.id);
  });

