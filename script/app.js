var myApp = angular.module("myApp", ["ngRoute"]);

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
    templateUrl : "index.htm"
  })
  .when("/view-all", {
    templateUrl : "views/view-all.html"
  })
  .when("/add", {
	templateUrl: "views/add.html"
  });
});

/*myApp.directive('viewAll', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/view-all.html'
  };
});*/