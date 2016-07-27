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
	// $scope.pathparadox = projects[0].description
})

app.factory('projectsFty', function ($http) {
	var projectsFty = {};
	projectsFty.getProjects = function () {
		return $http.get('/api/projects')
			.then(function (res) {
				return res.data;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImFib3V0L2Fib3V0LmN0cmwuanMiLCJhYm91dC9hYm91dC5mdHkuanMiLCJhYm91dC9hYm91dC5zdGF0ZS5qcyIsImNvbnRhY3QvY29udGFjdC5jdHJsLmpzIiwiY29udGFjdC9jb250YWN0LmZ0eS5qcyIsImNvbnRhY3QvY29udGFjdC5zdGF0ZS5qcyIsImhvbWUvaG9tZS5jdHJsLmpzIiwiaG9tZS9ob21lLmZ0eS5qcyIsImhvbWUvaG9tZS5zdGF0ZS5qcyIsIm5hdi9uYXYuZGlyZWN0aXZlLmpzIiwicHJvamVjdHMvcHJvamVjdHMuY3RybC5qcyIsInByb2plY3RzL3Byb2plY3RzLmZ0eS5qcyIsInByb2plY3RzL3Byb2plY3RzLnN0YXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ3BvcnRmb2xpbycsIFsndWkucm91dGVyJ10pXG5cdC5jb25maWcoZnVuY3Rpb24gKCR1cmxSb3V0ZXJQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIpIHtcblx0XHQvLyByZW1vdmUgJyMnIGZyb20gdXJsc1xuXHRcdCRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh0cnVlKTtcblxuXHRcdC8vIGludmFsaWQgcm91dGVzIHJlZGlyZWN0IHRvIHRoZSByb290XG5cdFx0JHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuXG5cdH0pXG4iLCJhcHAuY29udHJvbGxlcihcImFib3V0Q3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBhYm91dCkge1xuXHQkc2NvcGUuYWJvdXQgPSBhYm91dDtcbn0pXG4iLCJhcHAuZmFjdG9yeSgnYWJvdXRGdHknLCBmdW5jdGlvbiAoJGh0dHApIHtcblx0dmFyIGFib3V0RnR5ID0ge307XG5cdGFib3V0RnR5LmdldEFib3V0ID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAkaHR0cC5nZXQoJy9hcGkvYWJvdXQnKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24gKHJlcykge1xuXHRcdFx0XHRyZXR1cm4gcmVzLmRhdGEuYWJvdXQ7XG5cdFx0XHR9KVxuXHR9XG5cdHJldHVybiBhYm91dEZ0eTtcbn0pXG4iLCJhcHAuY29uZmlnKGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuXHQkc3RhdGVQcm92aWRlci5zdGF0ZShcImFib3V0XCIsIHtcblx0XHR1cmw6IFwiL2Fib3V0XCIsXG5cdFx0dGVtcGxhdGVVcmw6IFwiL2pzL2Fib3V0L2Fib3V0Lmh0bWxcIixcblx0XHRjb250cm9sbGVyOiBcImFib3V0Q3RybFwiLFxuXHRcdHJlc29sdmU6IHtcblx0XHRcdGFib3V0OiBmdW5jdGlvbiAoYWJvdXRGdHkpIHtcblx0XHRcdFx0cmV0dXJuIGFib3V0RnR5LmdldEFib3V0KCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KVxufSlcbiIsImFwcC5jb250cm9sbGVyKFwiY29udGFjdEN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgY29udGFjdEluZm8pIHtcblx0JHNjb3BlLmNvbnRhY3QgPSBjb250YWN0SW5mb1xufSlcbiIsImFwcC5mYWN0b3J5KCdjb250YWN0RnR5JywgZnVuY3Rpb24gKCRodHRwKSB7XG5cdHZhciBjb250YWN0RnR5ID0ge307XG5cdGNvbnRhY3RGdHkuZ2V0Q29udGFjdEluZm8gPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICRodHRwLmdldCgnL2FwaS9jb250YWN0Jylcblx0XHRcdC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcblx0XHRcdFx0cmV0dXJuIHJlcy5kYXRhLmNvbnRhY3Q7XG5cdFx0XHR9KVxuXHR9XG5cdHJldHVybiBjb250YWN0RnR5O1xufSlcbiIsImFwcC5jb25maWcoZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG5cdCRzdGF0ZVByb3ZpZGVyLnN0YXRlKFwiY29udGFjdFwiLCB7XG5cdFx0dXJsOiBcIi9jb250YWN0XCIsXG5cdFx0dGVtcGxhdGVVcmw6IFwiL2pzL2NvbnRhY3QvY29udGFjdC5odG1sXCIsXG5cdFx0Y29udHJvbGxlcjogXCJjb250YWN0Q3RybFwiLFxuXHRcdHJlc29sdmU6IHtcblx0XHRcdGNvbnRhY3RJbmZvOiBmdW5jdGlvbiAoY29udGFjdEZ0eSkge1xuXHRcdFx0XHRyZXR1cm4gY29udGFjdEZ0eS5nZXRDb250YWN0SW5mbygpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSlcbn0pXG4iLCJhcHAuY29udHJvbGxlcihcImhvbWVDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIGhvbWUpIHtcblx0JHNjb3BlLmhvbWUgPSBob21lO1xufSlcbiIsImFwcC5mYWN0b3J5KCdob21lRnR5JywgZnVuY3Rpb24gKCRodHRwKSB7XG5cdHZhciBob21lRnR5ID0ge307XG5cdGhvbWVGdHkuZ2V0SG9tZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL2hvbWUnKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24gKHJlcykge1xuXHRcdFx0XHRyZXR1cm4gcmVzLmRhdGEuaG9tZTtcblx0XHRcdH0pXG5cdH1cblx0cmV0dXJuIGhvbWVGdHk7XG59KVxuIiwiYXBwLmNvbmZpZyhmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcblx0JHN0YXRlUHJvdmlkZXIuc3RhdGUoXCJob21lXCIsIHtcblx0XHR1cmw6IFwiL1wiLFxuXHRcdHRlbXBsYXRlVXJsOiBcIi9qcy9ob21lL2hvbWUuaHRtbFwiLFxuXHRcdGNvbnRyb2xsZXI6IFwiaG9tZUN0cmxcIixcblx0XHRyZXNvbHZlOiB7XG5cdFx0XHRob21lOiBmdW5jdGlvbiAoaG9tZUZ0eSkge1xuXHRcdFx0XHRyZXR1cm4gaG9tZUZ0eS5nZXRIb21lKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KVxufSlcbiIsImFwcC5kaXJlY3RpdmUoXCJuYXZcIiwgZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4ge1xuXHRcdHJlc3RyaWN0OiBcIkVcIixcblx0XHR0ZW1wbGF0ZVVybDogXCIvanMvbmF2L25hdi5odG1sXCIsXG5cdFx0bGluazogZnVuY3Rpb24gKHNjb3BlLCBlbG0sIGF0dHIpIHtcblxuXHRcdH1cblx0fVxufSlcbiIsImFwcC5jb250cm9sbGVyKFwicHJvamVjdHNDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIHByb2plY3RzKSB7XG5cdCRzY29wZS5wcm9qZWN0cyA9IHByb2plY3RzO1xuXHQvLyAkc2NvcGUucGF0aHBhcmFkb3ggPSBwcm9qZWN0c1swXS5kZXNjcmlwdGlvblxufSlcbiIsImFwcC5mYWN0b3J5KCdwcm9qZWN0c0Z0eScsIGZ1bmN0aW9uICgkaHR0cCkge1xuXHR2YXIgcHJvamVjdHNGdHkgPSB7fTtcblx0cHJvamVjdHNGdHkuZ2V0UHJvamVjdHMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICRodHRwLmdldCgnL2FwaS9wcm9qZWN0cycpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocmVzKSB7XG5cdFx0XHRcdHJldHVybiByZXMuZGF0YTtcblx0XHRcdH0pXG5cdH1cblx0cmV0dXJuIHByb2plY3RzRnR5O1xufSlcbiIsImFwcC5jb25maWcoZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG5cdCRzdGF0ZVByb3ZpZGVyLnN0YXRlKFwicHJvamVjdHNcIiwge1xuXHRcdHVybDogXCIvcHJvamVjdHNcIixcblx0XHR0ZW1wbGF0ZVVybDogXCIvanMvcHJvamVjdHMvcHJvamVjdHMuaHRtbFwiLFxuXHRcdGNvbnRyb2xsZXI6IFwicHJvamVjdHNDdHJsXCIsXG5cdFx0cmVzb2x2ZToge1xuXHRcdFx0cHJvamVjdHM6IGZ1bmN0aW9uIChwcm9qZWN0c0Z0eSkge1xuXHRcdFx0XHRyZXR1cm4gcHJvamVjdHNGdHkuZ2V0UHJvamVjdHMoKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pXG59KVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
