var myApp = angular.module("myApp", ['ngRoute']);
/*
myApp.controller("toDoController", ["$scope", function ($scope){
	$scope.tasks=[
		{name: "Take dog for a walk"},
		{name: "Clean the Kitchen"},
		{name: "Get coffee with Jill at 6PM"},
		{name: "Finish sales report"},
		{name: "Call mom"},
	];
}]);*/

myApp.controller("newChainController", ["$scope", function ($scope){
	$scope.habits = [
		{
			name: 'Flossing',
			desc: "Following my dentist's advice and flossing daily to avoid tartar and cavities.",
			days: ["Su", "M", "Tu", "W", "Th", "F", "Sa"],
			date: "16/08/2016"
		},{
			name: "Running",
			desc: "Go jogging twice a week for 30 minutes. This is a good way to stay in shape.",
			days: ["M", "W", "F"],
			date: "19/05/2016"
		},{
			name: "Wake up before 9AM",
			desc: "Get my day started early by being awake early. Even on weekends!",
			days: ["M", "Tu", "W", "Th", "F"],
			date: "01/02/2016"
		}
	];
	$scope.addChain= function(){
		console.log("submit has been pushed");
		$scope.date = new Date();
		$scope.habits.push({name: $scope.name, desc: $scope.desc, date: $scope.date});
		$scope.name ="";
		$scope.desc ="";
		$scope.date ="";
	};
}]);

myApp.config(function($routeProvider) {
  $routeProvider
  .when("/", {
		controller: "newChainController",
    templateUrl : "index.html"
  })
  .when("/view-all", {
		controller: "newChainController",
    templateUrl : "views/view-all.html"
  })
	.when("/today", {
		controller: "newChainController",
		templateUrl : "views/today.html"
	})
  .when("/add", {
		controller: "newChainController",
		templateUrl: "views/add.html"
  })
	.otherwise({redirectTo:"/"});
});

/*myApp.directive('viewAll', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/view-all.html'
  };
});*/
