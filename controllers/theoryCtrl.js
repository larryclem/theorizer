angular.module('Theorizer')
.controller('theoryCtrl', function($scope, $firebaseArray, theoriesRef){
	
	$scope.theories = $firebaseArray(theoriesRef);

	$scope.addTheory = function () {
		$scope.theories.$add({
			author: $scope.author,
			title: $scope.title,
			evidence: $scope.evidence			
		})
		$scope.title = null;
		$scope.evidence = null;
		
	}
	
});