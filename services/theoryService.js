angular.module('Theorizer').service('theoryService', function(Firebase, firebaseUrl) {
	//var firebaseUrl = {ref: 'https://theorizer.firebaseio.com/'};
	this.getTheories = function() {
		console.log('getting theories, ');
		return new Firebase(firebaseUrl.ref + "theories/");
	};
	this.getTheory = function(theoryId) {
		console.log('getting theory');
		return new Firebase(firebaseUrl.ref + "theories/" + theoryId);
	};
});