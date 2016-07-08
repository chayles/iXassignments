var app = angular.module('nytimesApp', []);

var NY_TIMES_API_KEY = 'fccdb5d03c6546348903fc254083aba9';

app.controller('MainCtrl', function($scope, $http){
	$scope.searchReserves = function(){
		$http({
		url:'https://api.nytimes.com/svc/search/v2/articlesearch.json',
		method: 'GET',
		params: {
			'api-key': NY_TIMES_API_KEY,
			'q': $scope.searchRequest
		}
	}).then(function(response){
		$scope.articles = response.data.results;
		})
	}
})