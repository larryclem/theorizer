angular.module('Theorizer')
.controller('hypoCtrl', function($scope, $firebaseArray, hyposRef, $state){

	$scope.hypotheses = $firebaseArray(hyposRef);
	console.log($scope.hypotheses);
	$scope.addHypothesis = function () {
		$scope.hypotheses.$add({
			author: $scope.author,
			title: $scope.title,
			evidence: $scope.evidence			
		})
		$scope.title = null;
		$scope.evidence = null;
		$scope.author = null;
		$state.go('hypotheses')
		
	}
	
});