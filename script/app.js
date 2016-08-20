var myApp = angular.module("myApp", []);

myApp.controller("newChainController", ["$scope", function ($scope){
	$scope.habits = [
		{
			name: 'Flossing',
			desc: "Following my dentist's advice and flossing daily to avoid tartar and cavities.",
			days: ["Su", "M", "Tu", "W", "Th", "F", "Sa"],
			date: "Aug 3"
		},{
			name: "Running",
			desc: "Go jogging twice a week for 30 minutes. This is a good way to stay in shape.",
			days: ["M", "W", "F"],
			date: "aug 5"
		},{
			name: "Wake up before 9AM",
			desc: "Get my day started early by being awake early. Even on weekends!",
			days: ["M", "Tu", "W", "Th", "F"],
			date: "july 8"
		}
	];
	$scope.addChain= function(){
		console.log("submit has been pushed");
		$scope.habits.push({name: $scope.name, desc: $scope.desc});
		$scope.name ="";
		$scope.desc ="";	
	};
}]);

myApp.directive('viewAll', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/view-all.html'
  };
});