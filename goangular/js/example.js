/* jshint browser:true */
/* global _, angular */

(function() {

'use strict';

var app = angular.module('app', ['goangular']);

app.config(function($goConnectionProvider) {
  var url = window.connectUrl || 'https://goinstant.net/cmac/goangular';

  $goConnectionProvider.$set(url);
});

app.controller('exampleCtrl', function($scope, $goKey) {
  $scope.list = $goKey('list', 'example-lobby').$sync();

  $scope.list.$createNew = function() {
    $scope.list.$add({ title: $scope.title });

    $scope.title = '';
  };

  $scope.list.$remove = function(id) {
    $scope.list.$key(id).$remove();
  };

  window.list = $scope.list;
});

})();
