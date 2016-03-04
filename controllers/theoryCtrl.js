angular.module('Theorizer')
.controller('theoryCtrl', function($scope, $firebaseArray, theoriesRef, $state){

	$scope.theories = $firebaseArray(theoriesRef);
	console.log($scope.theories);
	$scope.addTheory = function () {
		$scope.theories.$add({
			author: $scope.author,
			title: $scope.title,
			evidence: $scope.evidence			
		})
		$scope.title = null;
		$scope.evidence = null;
		$state.go('theories')
		
	}
	
});