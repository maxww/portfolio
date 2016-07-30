'use strict';

var app = angular.module('portfolio', ['ui.router', 'ngAnimate'])
	.config(function ($urlRouterProvider, $locationProvider) {
		// remove '#' from urls
		$locationProvider.html5Mode(true);

		// invalid routes redirect to the root
		$urlRouterProvider.when('/', '/home');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImFib3V0L2Fib3V0LmN0cmwuanMiLCJhYm91dC9hYm91dC5mdHkuanMiLCJhYm91dC9yZXN1bWUuY3RybC5qcyIsImFsbC9hbGwuc3RhdGUuanMiLCJob21lL2hvbWUuY3RybC5qcyIsIm5hdi9uYXYuZGlyZWN0aXZlLmpzIiwicHJvamVjdHMvcHJvamVjdC5jdHJsLmpzIiwicHJvamVjdHMvcHJvamVjdHMuZnR5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdwb3J0Zm9saW8nLCBbJ3VpLnJvdXRlcicsICduZ0FuaW1hdGUnXSlcblx0LmNvbmZpZyhmdW5jdGlvbiAoJHVybFJvdXRlclByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcikge1xuXHRcdC8vIHJlbW92ZSAnIycgZnJvbSB1cmxzXG5cdFx0JGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHRydWUpO1xuXG5cdFx0Ly8gaW52YWxpZCByb3V0ZXMgcmVkaXJlY3QgdG8gdGhlIHJvb3Rcblx0XHQkdXJsUm91dGVyUHJvdmlkZXIud2hlbignLycsICcvaG9tZScpO1xuXHR9KVxuIiwiYXBwLmNvbnRyb2xsZXIoXCJhYm91dEN0cmxcIiwgZnVuY3Rpb24gKCRyb290U2NvcGUpIHtcblx0JHJvb3RTY29wZS5uYXYgPSB0cnVlO1xufSlcbiIsImFwcC5mYWN0b3J5KCdhYm91dEZ0eScsIGZ1bmN0aW9uICgkaHR0cCkge1xuXHR2YXIgYWJvdXRGdHkgPSB7fTtcblx0YWJvdXRGdHkuZ2V0QWJvdXQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICRodHRwLmdldCgnL2FwaS9hYm91dCcpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocmVzKSB7XG5cdFx0XHRcdHJldHVybiByZXMuZGF0YTtcblx0XHRcdH0pXG5cdH1cblx0cmV0dXJuIGFib3V0RnR5O1xufSlcbiIsImFwcC5jb250cm9sbGVyKFwicmVzdW1lQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCByZXN1bWUsIHByb2plY3RzLCAkcm9vdFNjb3BlKSB7XG5cdCRyb290U2NvcGUubmF2ID0gdHJ1ZTtcblx0JHNjb3BlLmFib3V0ID0gcmVzdW1lO1xuXHQkc2NvcGUucHJvamVjdHMgPSBwcm9qZWN0cztcblx0JHNjb3BlLnBhdGhwYXJhZG94SW1ncyA9IHByb2plY3RzWzBdLmltYWdlcztcblx0JHNjb3BlLm1vcmVDYXRJbWdzID0gcHJvamVjdHNbMV0uaW1hZ2VzO1xufSlcbiIsImFwcC5jb25maWcoZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG5cdCRzdGF0ZVByb3ZpZGVyLnN0YXRlKFwiYWxsXCIsIHtcblx0XHRcdHVybDogXCIvXCIsXG5cdFx0XHR0ZW1wbGF0ZVVybDogXCIvanMvYWxsL2FsbC5odG1sXCJcblx0XHR9KVxuXHRcdC5zdGF0ZShcImFsbC5ob21lXCIsIHtcblx0XHRcdHVybDogXCJob21lXCIsXG5cdFx0XHR0ZW1wbGF0ZVVybDogXCIvanMvaG9tZS9ob21lLmh0bWxcIixcblx0XHRcdGNvbnRyb2xsZXI6IFwiaG9tZUN0cmxcIlxuXHRcdH0pXG5cdFx0LnN0YXRlKFwiYWxsLnJlc3VtZVwiLCB7XG5cdFx0XHR1cmw6IFwicmVzdW1lXCIsXG5cdFx0XHR0ZW1wbGF0ZVVybDogXCIvanMvYWJvdXQvcmVzdW1lLmh0bWxcIixcblx0XHRcdGNvbnRyb2xsZXI6IFwicmVzdW1lQ3RybFwiLFxuXHRcdFx0cmVzb2x2ZToge1xuXHRcdFx0XHRyZXN1bWU6IGZ1bmN0aW9uIChhYm91dEZ0eSkge1xuXHRcdFx0XHRcdHJldHVybiBhYm91dEZ0eS5nZXRBYm91dCgpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRwcm9qZWN0czogZnVuY3Rpb24gKHByb2plY3RzRnR5KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHByb2plY3RzRnR5LmdldFByb2plY3RzKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KVxuXHRcdC5zdGF0ZShcImFsbC5hYm91dFwiLCB7XG5cdFx0XHR1cmw6IFwiYWJvdXRcIixcblx0XHRcdGNvbnRyb2xsZXI6IFwiYWJvdXRDdHJsXCIsXG5cdFx0XHR0ZW1wbGF0ZVVybDogXCIvanMvYWJvdXQvYWJvdXQuaHRtbFwiXG5cdFx0fSlcblx0XHQuc3RhdGUoXCJhbGwucHJvamVjdFwiLCB7XG5cdFx0XHR1cmw6IFwiOm5hbWVcIixcblx0XHRcdHRlbXBsYXRlVXJsOiBcIi9qcy9wcm9qZWN0cy9wcm9qZWN0Lmh0bWxcIixcblx0XHRcdGNvbnRyb2xsZXI6IFwicHJvamVjdEN0cmxcIixcblx0XHRcdHJlc29sdmU6IHtcblx0XHRcdFx0cHJvamVjdHM6IGZ1bmN0aW9uIChwcm9qZWN0c0Z0eSkge1xuXHRcdFx0XHRcdHJldHVybiBwcm9qZWN0c0Z0eS5nZXRQcm9qZWN0cygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSlcbn0pXG4iLCJhcHAuY29udHJvbGxlcihcImhvbWVDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsICRyb290U2NvcGUpIHtcblx0JHJvb3RTY29wZS5uYXYgPSBmYWxzZTtcbn0pXG4iLCJhcHAuZGlyZWN0aXZlKFwibmF2XCIsIGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogXCJFXCIsXG5cdFx0dGVtcGxhdGVVcmw6IFwiL2pzL25hdi9uYXYuaHRtbFwiXG5cdFx0XHQvLyBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsbSwgYXR0cikge1xuXHRcdFx0Ly8gXHRzY29wZS4kd2F0Y2goZnVuY3Rpb24gKCkge1xuXHRcdFx0Ly8gXHRcdHJldHVybiBuYXZGdHkuZ2V0TmF2KCksXG5cdFx0XHQvLyBcdFx0XHRmdW5jdGlvbiAoYm9vbCkge1xuXHRcdFx0Ly8gXHRcdFx0XHRzY29wZS5uYXYgPSBib29sO1xuXHRcdFx0Ly8gXHRcdFx0fVxuXHRcdFx0Ly8gXHR9KVxuXHRcdFx0Ly8gfVxuXHR9XG59KVxuIiwiYXBwLmNvbnRyb2xsZXIoXCJwcm9qZWN0Q3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBwcm9qZWN0cywgJHN0YXRlUGFyYW1zLCAkcm9vdFNjb3BlKSB7XG5cdCRyb290U2NvcGUubmF2ID0gdHJ1ZTtcblx0aWYgKCRzdGF0ZVBhcmFtcy5uYW1lID09PSBcInBhdGhwYXJhZG94XCIpIHtcblx0XHQkc2NvcGUucHJvamVjdCA9IHByb2plY3RzWzBdO1xuXHRcdCRzY29wZS5wYXRocGFyYWRveCA9IHRydWU7XG5cdH1cblx0aWYgKCRzdGF0ZVBhcmFtcy5uYW1lID09PSBcIm1vcmVjYXRcIikge1xuXHRcdCRzY29wZS5wcm9qZWN0ID0gcHJvamVjdHNbMV07XG5cdFx0JHNjb3BlLm1vcmVjYXQgPSB0cnVlO1xuXHR9XG59KVxuIiwiYXBwLmZhY3RvcnkoJ3Byb2plY3RzRnR5JywgZnVuY3Rpb24gKCRodHRwKSB7XG5cdHZhciBwcm9qZWN0c0Z0eSA9IHt9O1xuXHRwcm9qZWN0c0Z0eS5nZXRQcm9qZWN0cyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3Byb2plY3RzJylcblx0XHRcdC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcblx0XHRcdFx0cmV0dXJuIHJlcy5kYXRhO1xuXHRcdFx0fSlcblx0fVxuXHRyZXR1cm4gcHJvamVjdHNGdHk7XG59KVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
