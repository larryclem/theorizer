angular.module('Theorizer').service('hypoService', function(Firebase, firebaseUrl) {
	//var firebaseUrl = {ref: 'https://theorizer.firebaseio.com/'};
	this.getHypos = function() {
		console.log('getting theories, ');
		return new Firebase(firebaseUrl.ref + "hypotheses/");
	};
	this.getHypo = function(hypoId) {
		console.log('getting theory');
		return new Firebase(firebaseUrl.ref + "hypotheses/" + hypoId);
	};
});