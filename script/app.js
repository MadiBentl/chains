var myApp = angular.module("myApp", []);

myApp.controller("newChainController", function ($scope){
	$scope.habits = [
		{
			name: 'Flossing',
			desc: "Following my dentist's advice and flossing daily to avoid tartar and cavities."
		},{
			name: "Running",
			desc: "Go jogging twice a week for 30 minutes. This is a good way to stay in shape."
		},{
			name: "Wake up before 9AM",
			desc: "Get my day started early by being awake early. Even on weekends!"
		}
	];
	$scope.submit= function(){
		console.log("submit has been pushed");
		$scope.habits.push({name: $scope.name, desc: $scope.desc});
		$scope.name ="";
		$scope.desc ="";	
	};
});