angular.module('logging', [])
.controller('LogController', ['$scope', '$log', function($scope, $log) {
  $scope.$log = $log;
  $scope.message = 'Log me!!';
}]);