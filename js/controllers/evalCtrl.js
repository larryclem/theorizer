angular.module('Theorizer')
.controller('evalCtrl', function($scope, $firebaseArray, $firebaseObject, hypoRef){

	$scope.hypothesis = $firebaseObject(hypoRef);

	$scope.evals = $firebaseArray(hypoRef.child('evals'));

	//fire this when click submit comment
	$scope.addEval = function () {
		$scope.evals.$add({
			evaluation: $scope.evaluation,
			evaluator: $scope.evaluator
		})
	}
})