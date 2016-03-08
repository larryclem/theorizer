angular.module('Theorizer', ['ui.router', 'firebase'])
	
	.constant('firebaseUrl', {
		ref: 'https://theorizer.firebaseio.com/'

	})
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('home', {
		url: '/',
		templateUrl:'/templates/home.html',
		controller: 'hypoCtrl',
			resolve: {
			hyposRef: function (hypoService) {
				return hypoService.getHypos();
			}
		}
	})
	.state('hypothesize', {
		url: '/hypothesize',
		templateUrl:'/templates/hypothesize.html',
		controller: 'hypoCtrl',
			resolve: {
			hyposRef: function (hypoService) {
				return hypoService.getHypos();
			}
		}
	})
	.state('hypotheses', {
		url: '/hypotheses',
		templateUrl: '/templates/hypotheses.html',
		controller: 'hypoCtrl',
		resolve: {
			hyposRef: function (hypoService) {
				return hypoService.getHypos();
			}
		}
	})
	.state('hypo_eval', {
		url: '/hypothesis/:hypoId/evaluate',
		templateUrl: '/templates/hypo-evaluate.html',
		controller: 'evalCtrl',
		resolve: {
			hypoRef: function (hypoService, $stateParams) {
				return hypoService.getHypo($stateParams.hypoId);
			}
		}
	})
	
		$urlRouterProvider.otherwise('/');

	})

