var app = angular.module('chommiesApp', ['ngRoute']);
var MY_CHOMMIES_TOKEN = "327e2f993ad08d2b077dd880524b61b9";

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        controller: 'FeedCtrl',
        templateUrl: 'templates/feed.html'
    })
    $routeProvider.when('/MyChommies', {
        controller: 'MyChommiesCtrl',
        templateUrl: 'templates/MyChommies.html'
    })
});

app.controller('FeedCtrl', function($scope, $http) {
    $scope.isSending = false;
    $http ({
        url: "http://ixchommies.herokuapp.com/props",
        method: "GET",
        params: {
            token: MY_CHOMMIES_TOKEN,
        }
    }).then(function(response) {
        console.log(response);
        $scope.props = response.data;
    })
    $http ({
        url: "http://ixchommies.herokuapp.com/brus",
        method: "GET",
        params: {
            token: MY_CHOMMIES_TOKEN,
        }
    }).then(function(response) {
        console.log(response);
        $scope.brus = response.data;
    })
    $scope.sendProps = function() {
        console.log($scope.selectedBru);
        console.log($scope.newPropsValue);
        $scope.errorMessage = "";
        $http ({
            url: "http://ixchommies.herokuapp.com/props",
            method: "POST",
            params: {
                token: MY_CHOMMIES_TOKEN,
            },
            data: {
                for: $scope.selectedBru,
                props: $scope.newPropsValue,
            }
        }).then(function(response){
            console.log("yup");
            $scope.props.unshift(response.data);
            $scope.propsPropsValue = {};
            $scope.newPropsValue = "";
        }).catch(function(response){
            $scope.errorMessage = response.data.message;
        }).finally(function(response){
            $scope.isSending = false;
        })
        }
    });

app.controller('MyChommiesCtrl', function($scope, $http){
    $http({
        url: "http://ixchommies.herokuapp.com/props/me",
        method: "GET",
        params:{
            token: MY_CHOMMIES_TOKEN,
        }
    }).then(function(response){
        console.log(response);
        $scope.myProps = response.data;
    })

})
