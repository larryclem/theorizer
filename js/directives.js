angular.module('Theorizer')
.directive('showNav', function(){
	return {
		templateUrl: 'templates/nav.html',
	}
})
.directive('showFoot', function(){
	return {
		templateUrl: 'templates/footer.html',
	}
})

// // for upvote functionality, do this inside controller in directive 

// create tRef variable which is a reference to the specific theory being repeated (directive is being repeated with the theory)

// var tRef = new Firebase (firebaseUrl.ref + "theories/" + $scope.theory.$id)
// //create object that is compatible with firebase, pass in tref and call it thisTheory (scope of thisTheory is local to the directive being repeated)

// var thisTheory = $firebaseObject(tRef)

// // these functions increment or decrement the vote count property on the specificy theory
// $scope.upvote = function (){
// 	thisTheory.votes++;
// }

// $scope.downvote = function () {
// 	thisTheory.votes--;
// }







