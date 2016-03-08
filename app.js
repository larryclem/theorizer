angular.module('Theorizer', ['ui.router', 'firebase'])
	
	.constant('firebaseUrl', {
		ref: 'https://theorizer.firebaseio.com/'

	})
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('home', {
		url: '/',
		templateUrl:'/templates/home.html',
		controller: 'theoryCtrl',
			resolve: {
			theoriesRef: function (theoryService) {
				return theoryService.getTheories();
			}
		}
	})
	.state('theories', {
		url: '/theories',
		templateUrl: '/templates/theories.html',
		controller: 'theoryCtrl',
		resolve: {
			theoriesRef: function (theoryService) {
				return theoryService.getTheories();
			}
		}
	})
	.state('theory_eval', {
		url: '/theory/:theoryId/evaluate',
		templateUrl: '/templates/theory-evaluate.html',
		controller: 'evalCtrl',
		resolve: {
			theoryRef: function (theoryService, $stateParams) {
				return theoryService.getTheory($stateParams.theoryId);
			}
		}
	})
	
		$urlRouterProvider.otherwise('/');

	})

