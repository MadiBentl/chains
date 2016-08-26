var myApp = angular.module("myApp", ["ngRoute"]);

myApp.controller("newChainController", ["$scope", function ($scope){
	$scope.habits = [
		{
			name: 'Flossing',
			desc: "Following my dentist's advice and flossing daily to avoid tartar and cavities.",
			days: ["Su", "M", "Tu", "W", "Th", "F", "Sa"],
			date: new Date(2016,05,19),
			diary: [{day: new Date(2016, 05, 18), didHab: true, notes: ""},
							{day: new Date(2016, 05, 19), didHab: false, notes: "Forgot"},
							{day: new Date(2016, 05, 20), didHab: true, notes: "Flossed Morning and Night"}]
		},{
			name: "Running",
			desc: "Go jogging twice a week for 30 minutes. This is a good way to stay in shape.",
			days: ["M", "W", "F"],
			date: new Date(2016,07,9),
			diary: [{day: new Date(2016, 07, 18), didHab: true, notes: ""},
							{day: new Date(2016, 07, 19), didHab: true, notes: "New personal best time"},
							{day: new Date(2016, 07, 20), didHab: true, notes: "Jogged 10KM"}]
		},{
			name: "Wake up before 9AM",
			desc: "Get my day started early by being awake early. Even on weekends!",
			days: ["M", "Tu", "W", "Th", "F"],
			date: new Date(2016,02,29),
			diary: [{day: new Date(2016, 07, 18), didHab: true, notes: ""},
							{day: new Date(2016, 07, 19), didHab: false, notes: "feeling sick"},
							{day: new Date(2016, 07, 20), didHab: true, notes: ""}]
		}
	];
	$scope.today= new Date();
	$scope.checkboxModel={
		didHabit: true
	}
	$scope.createCalendar = function(){
	};
	$scope.getLongestChain = function(habit){

	};
	$scope.getTotalDays = function(habit){
		var oneDay = 24*60*60*1000;
		var today= new Date();
		//Math.round(Math.abs((today.getTime() - habit.date.getTime())/oneDay)));
	};
	$scope.addDiary=function(name){
		$scope.habits[name].diary.push(
			{day:$scope.today,
			didHab:$scope.didItToday,
			notes: $scope.notes}
		);
		$scope.didItToday=Boolean;
		$scope.notes="";
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
