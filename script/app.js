var myApp = angular.module("myApp", ["ngRoute"]);

myApp.controller("newChainController", ["$scope", function ($scope){
	$scope.habits = [
		{
			name: 'Flossing',
			desc: "Following my dentist's advice and flossing daily to avoid tartar and cavities.",
			days: ["Su", "M", "Tu", "W", "Th", "F", "Sa"],
			date: new Date(2016,05,19),
			diary: []
		},{
			name: "Running",
			desc: "Go jogging twice a week for 30 minutes. This is a good way to stay in shape.",
			days: ["M", "W", "F"],
			date: new Date(2016,07,9),
			diary: []
		},{
			name: "Wake up before 9AM",
			desc: "Get my day started early by being awake early. Even on weekends!",
			days: ["M", "Tu", "W", "Th", "F"],
			date: new Date(2015,12,29),
			diary: []
		}
	];
	$scope.today= new Date();
	$scope.createCalendar = function(){
	};
	$scope.getLongestChain = function(habit){

	};
	$scope.getTotalDays = function(habit){
		var oneDay = 24*60*60*1000;
		var today= new Date();
		//Math.round(Math.abs((today.getTime() - habit.date.getTime())/oneDay)));
	};
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
    templateUrl : "index.html"
  })
  .when("/view-all", {
    templateUrl : "views/view-all.html"
  })
  .when("/add", {
	templateUrl: "views/add.html"
  })
  .when("/today", {
	  templateUrl: "views/today.html"
	});
});

/*myApp.directive('viewAll', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/view-all.html'
  };
});*/
