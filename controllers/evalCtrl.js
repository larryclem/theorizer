angular.module('Theorizer')
.controller('evalCtrl', function($scope, $firebaseArray, $firebaseObject, theoryRef){

	$scope.theory = $firebaseObject(theoryRef);

	$scope.evals = $firebaseArray(theoryRef.child('evals'));

	//fire this when click submit comment
	$scope.addEval = function () {
		$scope.evals.$add({
			evaluation: $scope.evaluation,
			evaluator: $scope.evaluator
		})
	}
})