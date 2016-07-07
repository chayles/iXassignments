var app = angular.module('listApp', []); 

app.controller('ListCtrl', function($scope) {
  $scope.todos = [];
  
  $scope.addTodo = function() {
    if ($scope.checkIt($scope.todoName, $scope.dueDate) === false) {
    	var newTodo = {
    	  name: $scope.todoName,
    	  dueDate: $scope.dueDate
  	    };
  	    $scope.todos.push(newTodo);
  	};
  	$scope.todoName = "";
  	$scope.dueDate = "";
  };
  $scope.addOne = function(todo) {
  	var itemNumber = parseInt(todo.dueDate);
  	todo.dueDate = itemNumber+1;
  };
  $scope.subtractOne = function(todo){
  	var itemNumber = parseInt(todo.dueDate);
  	todo.dueDate = itemNumber - 1;
  };
  $scope.checkIt = function(todoName, dueDate){
  	for (var i=0; i<$scope.todos.length; i++){
  		if ($scope.todos[i].name === todoName){
  			var itemNumber = parseInt($scope.todos[i].dueDate);
  			var newNumber = parseInt(dueDate);
  			$scope.todos[i].dueDate = itemNumber + newNumber;
  			return true;
  		};
  	};	
  	return false;
  };
});