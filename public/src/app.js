// instantiate an angular app
var app = angular.module('app', []);
  // declare one controller for the app
app.controller('appCtrl', function($scope, appFactory) {
  // * scope will have the query string as a variable
  // * show meta data as an object (reponse from AJAX call?)
<<<<<<< 36a7477548c90d84bd96157fb71c23023f029f56
  $scope.results = [];
=======
>>>>>>> (feat) - Added d3 Graph(Axes/Data Points) and Styling
  // * d3 object / data set (when data is changed page is update)
  // * search function
<<<<<<< 36a7477548c90d84bd96157fb71c23023f029f56
  $scope.submit = function() {
    // - make call to AJAX factory
    var season = 1;
    var seasonExists = true;
    var getAllSeasons = function(seasonNumber) {
    	$http({
    		//need to handle url spaces
    		method: 'GET',
        params: {t: $scope.query, type: 'series', season: seasonNumber},
    		url: 'http://www.omdbapi.com/?',
    	}).then(function(res) {
        console.log(res);
        if (res.data.Response === "True") {
          $scope.results.push(res.data);
          getAllSeasons(seasonNumber + 1);
        }
    		//run d3 function with data
    	}, function(err) {
        console.log(err);
      });
    };
    getAllSeasons(season);
  };
=======
    // - make call to AJAX factory
  $scope.test = 'testing';
});

// helper function / factory for AJAX
app.factory('appFactory', function($http) {
  // needs $http for AJAX functionality
  return {};
>>>>>>> (feat) - Added d3 Graph(Axes/Data Points) and Styling
});
