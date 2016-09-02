var myApp = angular.module("myApp", ['ngRoute']);

myApp.controller("toDoController", ["$scope", function ($scope){
	$scope.tasks=[
		{name: "Take dog for a walk", done: false},
		{name: "Clean the Kitchen", done: false},
		{name: "Get coffee with Jill at 6PM", done: false},
		{name: "Finish sales report", done: false},
		{name: "Call mom", done: false},
	];
	$scope.remove = function(index) {
		console.log(index);
    	$scope.tasks.splice(index, 1);
    };
	$scope.newTask={
		name:""
	};
	$scope.addTask= function(){
		$scope.tasks.push({name: $scope.newTask.name});
		$scope.newTask.name ="";
	};
}]);

myApp.controller("newChainController", ["$scope", function ($scope){
	$scope.newHabit={
		name:"",
		desc:"",
		date:""
	}
	$scope.habits = [
		{
			name: 'Flossing',
			desc: "Following my dentist's advice and flossing daily to avoid tartar and cavities.",
			days: ["Su", "M", "Tu", "W", "Th", "F", "Sa"],
			date: new Date(2016,05,19),
			done: false,
			diary: [{day: new Date(2016, 05, 18), didHab: true, notes: ""},
							{day: new Date(2016, 05, 19), didHab: false, notes: "Forgot"},
							{day: new Date(2016, 05, 20), didHab: true, notes: "Flossed Morning and Night"}]
		},{
			name: "Running",
			desc: "Go jogging twice a week for 30 minutes. This is a good way to stay in shape.",
			days: ["M", "W", "F"],
			date: new Date(2016,07,9),
			done: false,
			diary: [{day: new Date(2016, 07, 18), didHab: true, notes: ""},
							{day: new Date(2016, 07, 19), didHab: true, notes: "New personal best time"},
							{day: new Date(2016, 07, 20), didHab: true, notes: "Jogged 10KM"}]
		},{
			name: "Wake up before 9AM",
			desc: "Get my day started early by being awake early. Even on weekends!",
			days: ["M", "Tu", "W", "Th", "F"],
			date: new Date(2016,02,29),
			done: false,
			diary: [{day: new Date(2016, 07, 18), didHab: true, notes: ""},
							{day: new Date(2016, 07, 19), didHab: false, notes: "feeling sick"},
							{day: new Date(2016, 07, 20), didHab: true, notes: ""}]
		}
	];
	$scope.today= new Date();
	$scope.remove= function(index){
		console.log(index);
    	$scope.habits.splice(index, 1);
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
			$scope.habits.push({name: $scope.newHabit.name,
													desc: $scope.newHabit.desc,
													done: false,
													date: $scope.newHabit.date});
			console.log($scope.habits);
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
	.when("/today", {
		templateUrl : "views/today.html"
	})
  .when("/add", {
		templateUrl: "views/add.html"
  })
	.when("/finished", {
		templateUrl: "views/finished.html",
		controller: "toDoController"
	})
	.when("/titlepage", {
		templateUrl: "views/titlepage.html"
  })
	.otherwise({redirectTo:"/"});
});

/*myApp.directive('viewAll', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/view-all.html'
  };
});*/
