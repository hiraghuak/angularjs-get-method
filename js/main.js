var app = angular.module('marrowApp', []);
app.controller('marrowCtrl', function ($scope, $http) {

  // var url = "https://www.marrow.com/api/mw/faculty_content/drabbas";
  // var url = "https://shy-treefrog-38.localtunnel.me/api/mw/faculty_content/drabbas";
  // var url = "https://wicked-otter-41.localtunnel.me/api/mw/faculty_content/drabbas";
  var url = "drabbas.json";

  $http({
    method: "GET",
    url
  }).then(function success(response) {
    $scope.marrowData = response.data;
    console.log(angular.toJson($scope.marrowData) + " ok ");


  }, function error(response) {
    $scope.marrowData = response.statusText;
    console.log($scope.marrowData + " fail ");
  });



});
