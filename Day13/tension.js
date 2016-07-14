var app = angular.module("tensionApp",["ngRoute", "firebase"]);

app.config(function($routeProvider){
	$routeProvider.when("/", {
		controller: "MainCtrl",
		templateUrl: "templates/home.html",
    	resolve: {
      		"currentAuth": function($firebaseAuth) {
        		return $firebaseAuth().$requireSignIn();
      		}
    	}
	})
	$routeProvider.when("/channel/:channelID",{
		controller: "GeneralCtrl",
		templateUrl:"templates/general.html"
	})
	$routeProvider.when("/signup",{
		controller: "SignUpCtrl",
		templateUrl: "templates/SignUp.html"
	})
	$routeProvider.when("/login", {
		controller: "LoginCtrl",
		templateUrl: "templates/LogIn.html"
	})
});

app.run(["$rootScope", "$location", function($rootScope, $location) {
  $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
    // We can catch the error thrown when the $requireSignIn promise is rejected
    // and redirect the user back to the home page
    if (error === "AUTH_REQUIRED") {
      $location.path("/login");
    }
  });
}]);

app.controller("MainCtrl", function($scope, $firebaseArray){
	var ref = firebase.database().ref().child("channels");
	$scope.channels = $firebaseArray(ref);
	console.log($scope.channels);
	$scope.signMeOut = function(){
		console.log("go away")
		firebase.auth().signOut().then(function(){
			window.location.href = "#/login" ;

		})
	}
	
});

app.controller("GeneralCtrl", function($scope, $firebaseArray, $routeParams, $firebaseAuth){
	console.log($scope.messages);
	$scope.authObj = $firebaseAuth();
	var ref = firebase.database().ref().child("messages").child($routeParams.channelID);
	$scope.messages = $firebaseArray(ref);
	$scope.addMessage = function(){
		$scope.messages.$add({
			text: $scope.newMessage,
			created_at: Date.now()
		});
		$scope.newMessage = "";
	}
});


app.controller("SignUpCtrl", function($scope, $firebaseAuth, $firebaseObject, $routeParams, $window){
	$scope.signUp = function(){
		$scope.authObj = $firebaseAuth()
			console.log($scope.name, $scope.email, $scope.password);
			$scope.authObj.$createUserWithEmailAndPassword($scope.email, $scope.password)
			.then(function(firebaseUser) {
    			
    			console.log("User " + firebaseUser.uid + " created successfully!");
    			var userRef = firebase.database().ref().child("user").child(firebaseUser.uid);
    			$scope.user = $firebaseObject(userRef);
    			$scope.user.name = $scope.name;
    			$scope.user.$save();
    			window.location.href="#/login";

  			}).catch(function(error) {
   				console.error("Error: ", error);
 			});
	}
})

app.controller("LoginCtrl", function($scope, $firebaseAuth, $routeParams, $window){
	$scope.login = function(){
		console.log($scope.name, $scope.email, $scope.password);
		$scope.authObj = $firebaseAuth();
		$scope.authObj.$signInWithEmailAndPassword($scope.email, $scope.password)
		.then(function(firebaseUser) {
  			console.log("Signed in as:", firebaseUser.uid);

  			window.location.href = "#/";

		}).catch(function(error) {
  			console.error("Authentication failed:", error);
		});
		
	}
})













