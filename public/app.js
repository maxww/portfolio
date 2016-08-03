'use strict';

var app = angular.module('portfolio', ['ui.router', 'ngAnimate'])
	.config(function ($urlRouterProvider, $locationProvider) {
		// remove '#' from urls
		$locationProvider.html5Mode(true);

		// invalid routes redirect to the root
		$urlRouterProvider.when('/', '/home');
	})

app.config(function ($stateProvider) {
	$stateProvider.state("all", {
			url: "/",
			templateUrl: "/js/all/all.html"
		})
		.state("all.home", {
			url: "home",
			templateUrl: "/js/home/home.html",
			controller: "homeCtrl"
		})
		.state("all.resume", {
			url: "resume",
			templateUrl: "/js/about/resume.html",
			controller: "resumeCtrl",
			resolve: {
				resume: function (aboutFty) {
					return aboutFty.getAbout();
				},
				projects: function (projectsFty) {
					return projectsFty.getProjects();
				}
			}
		})
		.state("all.about", {
			url: "about",
			controller: "aboutCtrl",
			templateUrl: "/js/about/about.html"
		})
		.state("all.project", {
			url: ":name",
			templateUrl: "/js/projects/project.html",
			controller: "projectCtrl",
			resolve: {
				projects: function (projectsFty) {
					return projectsFty.getProjects();
				}
			}
		})
})

app.controller("aboutCtrl", function ($rootScope) {
	$rootScope.nav = true;
})

app.factory('aboutFty', function ($http) {
	var aboutFty = {};
	aboutFty.getAbout = function () {
		return $http.get('/api/about')
			.then(function (res) {
				return res.data;
			})
	}
	return aboutFty;
})

app.controller("resumeCtrl", function ($scope, resume, projects, $rootScope) {
	$rootScope.nav = true;
	$scope.about = resume;
	$scope.projects = projects;
	$scope.pathparadoxImgs = projects[0].images;
	$scope.moreCatImgs = projects[1].images;
})

app.controller("homeCtrl", function ($scope, $rootScope) {
	$rootScope.nav = false;
})

app.directive("nav", function () {
	return {
		restrict: "E",
		templateUrl: "/js/nav/nav.html"
			// link: function (scope, elm, attr) {
			// 	scope.$watch(function () {
			// 		return navFty.getNav(),
			// 			function (bool) {
			// 				scope.nav = bool;
			// 			}
			// 	})
			// }
	}
})

app.controller("projectCtrl", function ($scope, projects, $stateParams, $rootScope) {
	$rootScope.nav = true;
	if ($stateParams.name === "pathparadox") {
		$scope.project = projects[0];
		$scope.pathparadox = true;
	}
	if ($stateParams.name === "morecat") {
		$scope.project = projects[1];
		$scope.morecat = true;
	}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImFsbC9hbGwuc3RhdGUuanMiLCJhYm91dC9hYm91dC5jdHJsLmpzIiwiYWJvdXQvYWJvdXQuZnR5LmpzIiwiYWJvdXQvcmVzdW1lLmN0cmwuanMiLCJob21lL2hvbWUuY3RybC5qcyIsIm5hdi9uYXYuZGlyZWN0aXZlLmpzIiwicHJvamVjdHMvcHJvamVjdC5jdHJsLmpzIiwicHJvamVjdHMvcHJvamVjdHMuZnR5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdwb3J0Zm9saW8nLCBbJ3VpLnJvdXRlcicsICduZ0FuaW1hdGUnXSlcblx0LmNvbmZpZyhmdW5jdGlvbiAoJHVybFJvdXRlclByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcikge1xuXHRcdC8vIHJlbW92ZSAnIycgZnJvbSB1cmxzXG5cdFx0JGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHRydWUpO1xuXG5cdFx0Ly8gaW52YWxpZCByb3V0ZXMgcmVkaXJlY3QgdG8gdGhlIHJvb3Rcblx0XHQkdXJsUm91dGVyUHJvdmlkZXIud2hlbignLycsICcvaG9tZScpO1xuXHR9KVxuIiwiYXBwLmNvbmZpZyhmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcblx0JHN0YXRlUHJvdmlkZXIuc3RhdGUoXCJhbGxcIiwge1xuXHRcdFx0dXJsOiBcIi9cIixcblx0XHRcdHRlbXBsYXRlVXJsOiBcIi9qcy9hbGwvYWxsLmh0bWxcIlxuXHRcdH0pXG5cdFx0LnN0YXRlKFwiYWxsLmhvbWVcIiwge1xuXHRcdFx0dXJsOiBcImhvbWVcIixcblx0XHRcdHRlbXBsYXRlVXJsOiBcIi9qcy9ob21lL2hvbWUuaHRtbFwiLFxuXHRcdFx0Y29udHJvbGxlcjogXCJob21lQ3RybFwiXG5cdFx0fSlcblx0XHQuc3RhdGUoXCJhbGwucmVzdW1lXCIsIHtcblx0XHRcdHVybDogXCJyZXN1bWVcIixcblx0XHRcdHRlbXBsYXRlVXJsOiBcIi9qcy9hYm91dC9yZXN1bWUuaHRtbFwiLFxuXHRcdFx0Y29udHJvbGxlcjogXCJyZXN1bWVDdHJsXCIsXG5cdFx0XHRyZXNvbHZlOiB7XG5cdFx0XHRcdHJlc3VtZTogZnVuY3Rpb24gKGFib3V0RnR5KSB7XG5cdFx0XHRcdFx0cmV0dXJuIGFib3V0RnR5LmdldEFib3V0KCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHByb2plY3RzOiBmdW5jdGlvbiAocHJvamVjdHNGdHkpIHtcblx0XHRcdFx0XHRyZXR1cm4gcHJvamVjdHNGdHkuZ2V0UHJvamVjdHMoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0LnN0YXRlKFwiYWxsLmFib3V0XCIsIHtcblx0XHRcdHVybDogXCJhYm91dFwiLFxuXHRcdFx0Y29udHJvbGxlcjogXCJhYm91dEN0cmxcIixcblx0XHRcdHRlbXBsYXRlVXJsOiBcIi9qcy9hYm91dC9hYm91dC5odG1sXCJcblx0XHR9KVxuXHRcdC5zdGF0ZShcImFsbC5wcm9qZWN0XCIsIHtcblx0XHRcdHVybDogXCI6bmFtZVwiLFxuXHRcdFx0dGVtcGxhdGVVcmw6IFwiL2pzL3Byb2plY3RzL3Byb2plY3QuaHRtbFwiLFxuXHRcdFx0Y29udHJvbGxlcjogXCJwcm9qZWN0Q3RybFwiLFxuXHRcdFx0cmVzb2x2ZToge1xuXHRcdFx0XHRwcm9qZWN0czogZnVuY3Rpb24gKHByb2plY3RzRnR5KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHByb2plY3RzRnR5LmdldFByb2plY3RzKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KVxufSlcbiIsImFwcC5jb250cm9sbGVyKFwiYWJvdXRDdHJsXCIsIGZ1bmN0aW9uICgkcm9vdFNjb3BlKSB7XG5cdCRyb290U2NvcGUubmF2ID0gdHJ1ZTtcbn0pXG4iLCJhcHAuZmFjdG9yeSgnYWJvdXRGdHknLCBmdW5jdGlvbiAoJGh0dHApIHtcblx0dmFyIGFib3V0RnR5ID0ge307XG5cdGFib3V0RnR5LmdldEFib3V0ID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAkaHR0cC5nZXQoJy9hcGkvYWJvdXQnKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24gKHJlcykge1xuXHRcdFx0XHRyZXR1cm4gcmVzLmRhdGE7XG5cdFx0XHR9KVxuXHR9XG5cdHJldHVybiBhYm91dEZ0eTtcbn0pXG4iLCJhcHAuY29udHJvbGxlcihcInJlc3VtZUN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgcmVzdW1lLCBwcm9qZWN0cywgJHJvb3RTY29wZSkge1xuXHQkcm9vdFNjb3BlLm5hdiA9IHRydWU7XG5cdCRzY29wZS5hYm91dCA9IHJlc3VtZTtcblx0JHNjb3BlLnByb2plY3RzID0gcHJvamVjdHM7XG5cdCRzY29wZS5wYXRocGFyYWRveEltZ3MgPSBwcm9qZWN0c1swXS5pbWFnZXM7XG5cdCRzY29wZS5tb3JlQ2F0SW1ncyA9IHByb2plY3RzWzFdLmltYWdlcztcbn0pXG4iLCJhcHAuY29udHJvbGxlcihcImhvbWVDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsICRyb290U2NvcGUpIHtcblx0JHJvb3RTY29wZS5uYXYgPSBmYWxzZTtcbn0pXG4iLCJhcHAuZGlyZWN0aXZlKFwibmF2XCIsIGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogXCJFXCIsXG5cdFx0dGVtcGxhdGVVcmw6IFwiL2pzL25hdi9uYXYuaHRtbFwiXG5cdFx0XHQvLyBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsbSwgYXR0cikge1xuXHRcdFx0Ly8gXHRzY29wZS4kd2F0Y2goZnVuY3Rpb24gKCkge1xuXHRcdFx0Ly8gXHRcdHJldHVybiBuYXZGdHkuZ2V0TmF2KCksXG5cdFx0XHQvLyBcdFx0XHRmdW5jdGlvbiAoYm9vbCkge1xuXHRcdFx0Ly8gXHRcdFx0XHRzY29wZS5uYXYgPSBib29sO1xuXHRcdFx0Ly8gXHRcdFx0fVxuXHRcdFx0Ly8gXHR9KVxuXHRcdFx0Ly8gfVxuXHR9XG59KVxuIiwiYXBwLmNvbnRyb2xsZXIoXCJwcm9qZWN0Q3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBwcm9qZWN0cywgJHN0YXRlUGFyYW1zLCAkcm9vdFNjb3BlKSB7XG5cdCRyb290U2NvcGUubmF2ID0gdHJ1ZTtcblx0aWYgKCRzdGF0ZVBhcmFtcy5uYW1lID09PSBcInBhdGhwYXJhZG94XCIpIHtcblx0XHQkc2NvcGUucHJvamVjdCA9IHByb2plY3RzWzBdO1xuXHRcdCRzY29wZS5wYXRocGFyYWRveCA9IHRydWU7XG5cdH1cblx0aWYgKCRzdGF0ZVBhcmFtcy5uYW1lID09PSBcIm1vcmVjYXRcIikge1xuXHRcdCRzY29wZS5wcm9qZWN0ID0gcHJvamVjdHNbMV07XG5cdFx0JHNjb3BlLm1vcmVjYXQgPSB0cnVlO1xuXHR9XG59KVxuIiwiYXBwLmZhY3RvcnkoJ3Byb2plY3RzRnR5JywgZnVuY3Rpb24gKCRodHRwKSB7XG5cdHZhciBwcm9qZWN0c0Z0eSA9IHt9O1xuXHRwcm9qZWN0c0Z0eS5nZXRQcm9qZWN0cyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3Byb2plY3RzJylcblx0XHRcdC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcblx0XHRcdFx0cmV0dXJuIHJlcy5kYXRhO1xuXHRcdFx0fSlcblx0fVxuXHRyZXR1cm4gcHJvamVjdHNGdHk7XG59KVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
