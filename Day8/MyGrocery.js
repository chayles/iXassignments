var app = angular.module('listApp', []);

app.controller('listCtrl', function($scope) {
	$scope.grocery=[];

	$scope.addGrocery = function() {
		var newGrocery = {
			name: $scope.item,
			number: $scope.quantity
		};
		$scope.grocery.push(newGrocery);
		$scope.item = "";
		$scope.quantity="";
	};
});