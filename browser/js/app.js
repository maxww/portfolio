'use strict';

var app = angular.module('portfolio', ['ui.router', 'ngAnimate'])
	.config(function ($urlRouterProvider, $locationProvider) {
		// remove '#' from urls
		$locationProvider.html5Mode(true);

		// invalid routes redirect to the root
		$urlRouterProvider.when('/', '/home');
	})
