'use strict';

var app = angular.module('portfolio', ['ui.router'])
	.config(function ($urlRouterProvider, $locationProvider) {
		// remove '#' from urls
		$locationProvider.html5Mode(true);

		// invalid routes redirect to the root
		$urlRouterProvider.otherwise('/');

	})

app.controller("aboutCtrl", function ($scope, about) {
	$scope.about = about;
})

app.factory('aboutFty', function ($http) {
	var aboutFty = {};
	aboutFty.getAbout = function () {
		return $http.get('/api/about')
			.then(function (res) {
				return res.data.about;
			})
	}
	return aboutFty;
})

app.config(function ($stateProvider) {
	$stateProvider.state("about", {
		url: "/about",
		templateUrl: "/js/about/about.html",
		controller: "aboutCtrl",
		resolve: {
			about: function (aboutFty) {
				return aboutFty.getAbout();
			}
		}
	})
})

app.controller("contactCtrl", function ($scope, contactInfo) {
	$scope.contact = contactInfo
})

app.factory('contactFty', function ($http) {
	var contactFty = {};
	contactFty.getContactInfo = function () {
		return $http.get('/api/contact')
			.then(function (res) {
				return res.data.contact;
			})
	}
	return contactFty;
})

app.config(function ($stateProvider) {
	$stateProvider.state("contact", {
		url: "/contact",
		templateUrl: "/js/contact/contact.html",
		controller: "contactCtrl",
		resolve: {
			contactInfo: function (contactFty) {
				return contactFty.getContactInfo();
			}
		}
	})
})

app.controller("homeCtrl", function ($scope, home) {
	$scope.home = home;
})

app.factory('homeFty', function ($http) {
	var homeFty = {};
	homeFty.getHome = function () {
		return $http.get('/api/home')
			.then(function (res) {
				return res.data.home;
			})
	}
	return homeFty;
})

app.config(function ($stateProvider) {
	$stateProvider.state("home", {
		url: "/",
		templateUrl: "/js/home/home.html",
		controller: "homeCtrl",
		resolve: {
			home: function (homeFty) {
				return homeFty.getHome();
			}
		}
	})
})

app.directive("nav", function () {
	return {
		restrict: "E",
		templateUrl: "/js/nav/nav.html",
		link: function (scope, elm, attr) {

		}
	}
})

app.controller("projectsCtrl", function ($scope, projects) {
	$scope.projects = projects;
})

app.factory('projectsFty', function ($http) {
	var projectsFty = {};
	projectsFty.getProjects = function () {
		return $http.get('/api/projects')
			.then(function (res) {
				return res.data.projects;
			})
	}
	return projectsFty;
})

app.config(function ($stateProvider) {
	$stateProvider.state("projects", {
		url: "/projects",
		templateUrl: "/js/projects/projects.html",
		controller: "projectsCtrl",
		resolve: {
			projects: function (projectsFty) {
				return projectsFty.getProjects();
			}
		}
	})
})

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImFib3V0L2Fib3V0LmN0cmwuanMiLCJhYm91dC9hYm91dC5mdHkuanMiLCJhYm91dC9hYm91dC5zdGF0ZS5qcyIsImNvbnRhY3QvY29udGFjdC5jdHJsLmpzIiwiY29udGFjdC9jb250YWN0LmZ0eS5qcyIsImNvbnRhY3QvY29udGFjdC5zdGF0ZS5qcyIsImhvbWUvaG9tZS5jdHJsLmpzIiwiaG9tZS9ob21lLmZ0eS5qcyIsImhvbWUvaG9tZS5zdGF0ZS5qcyIsIm5hdi9uYXYuZGlyZWN0aXZlLmpzIiwicHJvamVjdHMvcHJvamVjdHMuY3RybC5qcyIsInByb2plY3RzL3Byb2plY3RzLmZ0eS5qcyIsInByb2plY3RzL3Byb2plY3RzLnN0YXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdwb3J0Zm9saW8nLCBbJ3VpLnJvdXRlciddKVxuXHQuY29uZmlnKGZ1bmN0aW9uICgkdXJsUm91dGVyUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKSB7XG5cdFx0Ly8gcmVtb3ZlICcjJyBmcm9tIHVybHNcblx0XHQkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUodHJ1ZSk7XG5cblx0XHQvLyBpbnZhbGlkIHJvdXRlcyByZWRpcmVjdCB0byB0aGUgcm9vdFxuXHRcdCR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcblxuXHR9KVxuIiwiYXBwLmNvbnRyb2xsZXIoXCJhYm91dEN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgYWJvdXQpIHtcblx0JHNjb3BlLmFib3V0ID0gYWJvdXQ7XG59KVxuIiwiYXBwLmZhY3RvcnkoJ2Fib3V0RnR5JywgZnVuY3Rpb24gKCRodHRwKSB7XG5cdHZhciBhYm91dEZ0eSA9IHt9O1xuXHRhYm91dEZ0eS5nZXRBYm91dCA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL2Fib3V0Jylcblx0XHRcdC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcblx0XHRcdFx0cmV0dXJuIHJlcy5kYXRhLmFib3V0O1xuXHRcdFx0fSlcblx0fVxuXHRyZXR1cm4gYWJvdXRGdHk7XG59KVxuIiwiYXBwLmNvbmZpZyhmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcblx0JHN0YXRlUHJvdmlkZXIuc3RhdGUoXCJhYm91dFwiLCB7XG5cdFx0dXJsOiBcIi9hYm91dFwiLFxuXHRcdHRlbXBsYXRlVXJsOiBcIi9qcy9hYm91dC9hYm91dC5odG1sXCIsXG5cdFx0Y29udHJvbGxlcjogXCJhYm91dEN0cmxcIixcblx0XHRyZXNvbHZlOiB7XG5cdFx0XHRhYm91dDogZnVuY3Rpb24gKGFib3V0RnR5KSB7XG5cdFx0XHRcdHJldHVybiBhYm91dEZ0eS5nZXRBYm91dCgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSlcbn0pXG4iLCJhcHAuY29udHJvbGxlcihcImNvbnRhY3RDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIGNvbnRhY3RJbmZvKSB7XG5cdCRzY29wZS5jb250YWN0ID0gY29udGFjdEluZm9cbn0pXG4iLCJhcHAuZmFjdG9yeSgnY29udGFjdEZ0eScsIGZ1bmN0aW9uICgkaHR0cCkge1xuXHR2YXIgY29udGFjdEZ0eSA9IHt9O1xuXHRjb250YWN0RnR5LmdldENvbnRhY3RJbmZvID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAkaHR0cC5nZXQoJy9hcGkvY29udGFjdCcpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocmVzKSB7XG5cdFx0XHRcdHJldHVybiByZXMuZGF0YS5jb250YWN0O1xuXHRcdFx0fSlcblx0fVxuXHRyZXR1cm4gY29udGFjdEZ0eTtcbn0pXG4iLCJhcHAuY29uZmlnKGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuXHQkc3RhdGVQcm92aWRlci5zdGF0ZShcImNvbnRhY3RcIiwge1xuXHRcdHVybDogXCIvY29udGFjdFwiLFxuXHRcdHRlbXBsYXRlVXJsOiBcIi9qcy9jb250YWN0L2NvbnRhY3QuaHRtbFwiLFxuXHRcdGNvbnRyb2xsZXI6IFwiY29udGFjdEN0cmxcIixcblx0XHRyZXNvbHZlOiB7XG5cdFx0XHRjb250YWN0SW5mbzogZnVuY3Rpb24gKGNvbnRhY3RGdHkpIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRhY3RGdHkuZ2V0Q29udGFjdEluZm8oKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pXG59KVxuIiwiYXBwLmNvbnRyb2xsZXIoXCJob21lQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBob21lKSB7XG5cdCRzY29wZS5ob21lID0gaG9tZTtcbn0pXG4iLCJhcHAuZmFjdG9yeSgnaG9tZUZ0eScsIGZ1bmN0aW9uICgkaHR0cCkge1xuXHR2YXIgaG9tZUZ0eSA9IHt9O1xuXHRob21lRnR5LmdldEhvbWUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICRodHRwLmdldCgnL2FwaS9ob21lJylcblx0XHRcdC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcblx0XHRcdFx0cmV0dXJuIHJlcy5kYXRhLmhvbWU7XG5cdFx0XHR9KVxuXHR9XG5cdHJldHVybiBob21lRnR5O1xufSlcbiIsImFwcC5jb25maWcoZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG5cdCRzdGF0ZVByb3ZpZGVyLnN0YXRlKFwiaG9tZVwiLCB7XG5cdFx0dXJsOiBcIi9cIixcblx0XHR0ZW1wbGF0ZVVybDogXCIvanMvaG9tZS9ob21lLmh0bWxcIixcblx0XHRjb250cm9sbGVyOiBcImhvbWVDdHJsXCIsXG5cdFx0cmVzb2x2ZToge1xuXHRcdFx0aG9tZTogZnVuY3Rpb24gKGhvbWVGdHkpIHtcblx0XHRcdFx0cmV0dXJuIGhvbWVGdHkuZ2V0SG9tZSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSlcbn0pXG4iLCJhcHAuZGlyZWN0aXZlKFwibmF2XCIsIGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogXCJFXCIsXG5cdFx0dGVtcGxhdGVVcmw6IFwiL2pzL25hdi9uYXYuaHRtbFwiLFxuXHRcdGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxtLCBhdHRyKSB7XG5cblx0XHR9XG5cdH1cbn0pXG4iLCJhcHAuY29udHJvbGxlcihcInByb2plY3RzQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBwcm9qZWN0cykge1xuXHQkc2NvcGUucHJvamVjdHMgPSBwcm9qZWN0cztcbn0pXG4iLCJhcHAuZmFjdG9yeSgncHJvamVjdHNGdHknLCBmdW5jdGlvbiAoJGh0dHApIHtcblx0dmFyIHByb2plY3RzRnR5ID0ge307XG5cdHByb2plY3RzRnR5LmdldFByb2plY3RzID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAkaHR0cC5nZXQoJy9hcGkvcHJvamVjdHMnKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24gKHJlcykge1xuXHRcdFx0XHRyZXR1cm4gcmVzLmRhdGEucHJvamVjdHM7XG5cdFx0XHR9KVxuXHR9XG5cdHJldHVybiBwcm9qZWN0c0Z0eTtcbn0pXG4iLCJhcHAuY29uZmlnKGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuXHQkc3RhdGVQcm92aWRlci5zdGF0ZShcInByb2plY3RzXCIsIHtcblx0XHR1cmw6IFwiL3Byb2plY3RzXCIsXG5cdFx0dGVtcGxhdGVVcmw6IFwiL2pzL3Byb2plY3RzL3Byb2plY3RzLmh0bWxcIixcblx0XHRjb250cm9sbGVyOiBcInByb2plY3RzQ3RybFwiLFxuXHRcdHJlc29sdmU6IHtcblx0XHRcdHByb2plY3RzOiBmdW5jdGlvbiAocHJvamVjdHNGdHkpIHtcblx0XHRcdFx0cmV0dXJuIHByb2plY3RzRnR5LmdldFByb2plY3RzKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KVxufSlcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
