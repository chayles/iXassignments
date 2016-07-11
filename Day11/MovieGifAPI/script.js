var app = angular.module("MovieApp", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'MainCtrl',
		templateUrl: 'templates/home.html',
	})
	$routeProvider.when('/movies/:movieId', {
		controller: 'MovieCtrl',
		templateUrl: 'templates/movies.html',
	})
});

app.controller('MainCtrl', function($scope, $http){
	$scope.searchTitle = function(){
		$http ({
			method: "GET",
			url: "http://www.omdbapi.com",
			params: {
				s: $scope.searchBox
			}
		}).then(function(response){
			$scope.moviesArray = response.data.Search;
			console.log(response.data);
	})
	}
});

app.controller('MovieCtrl', function($scope, $http, $routeParams){
	console.log("moviectrl");
	$http ({
		method: "GET",
		url: "http://www.omdbapi.com/", 
		params: {
			i: $routeParams.movieId
		}
	}).then(function(response){
		console.log(response);
		$scope.movieInfo = response.data;	
		console.log("gifctrl");
		$http ({
			method: "GET",
			url: "http://api.giphy.com/v1/gifs/search", 
			params: {
				q: $scope.movieInfo.Plot,
				api_key: "dc6zaTOxFJmzC"
			}
		}).then(function(response){
			console.log(response);
			$scope.gifs = response.data.data;
		})
	})
});

