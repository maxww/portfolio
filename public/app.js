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
		.state("all.art", {
			url: "art",
			controller: "artCtrl",
			templateUrl: '/js/art/art.html',
			resolve: {
				arts: function (artFty) {
					return artFty.getArts();
				}
			}
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

app.controller('artCtrl', function ($scope, $rootScope, arts) {
	$rootScope.nav = true;
	$scope.hi = "hi"
	$scope.arts = arts;
	$scope.art = arts[0]

})

app.factory("artFty", function ($http) {
	return {
		getArts: function () {
			return $http.get('/api/art')
				.then(function (res) {
					return res.data;
				})
		}
	}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImFib3V0L2Fib3V0LmN0cmwuanMiLCJhYm91dC9hYm91dC5mdHkuanMiLCJhYm91dC9yZXN1bWUuY3RybC5qcyIsImFsbC9hbGwuc3RhdGUuanMiLCJhcnQvYXJ0LmN0cmwuanMiLCJhcnQvYXJ0LmZ0eS5qcyIsImhvbWUvaG9tZS5jdHJsLmpzIiwibmF2L25hdi5kaXJlY3RpdmUuanMiLCJwcm9qZWN0cy9wcm9qZWN0LmN0cmwuanMiLCJwcm9qZWN0cy9wcm9qZWN0cy5mdHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ3BvcnRmb2xpbycsIFsndWkucm91dGVyJywgJ25nQW5pbWF0ZSddKVxuXHQuY29uZmlnKGZ1bmN0aW9uICgkdXJsUm91dGVyUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKSB7XG5cdFx0Ly8gcmVtb3ZlICcjJyBmcm9tIHVybHNcblx0XHQkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUodHJ1ZSk7XG5cblx0XHQvLyBpbnZhbGlkIHJvdXRlcyByZWRpcmVjdCB0byB0aGUgcm9vdFxuXHRcdCR1cmxSb3V0ZXJQcm92aWRlci53aGVuKCcvJywgJy9ob21lJyk7XG5cdH0pXG4iLCJhcHAuY29udHJvbGxlcihcImFib3V0Q3RybFwiLCBmdW5jdGlvbiAoJHJvb3RTY29wZSkge1xuXHQkcm9vdFNjb3BlLm5hdiA9IHRydWU7XG59KVxuIiwiYXBwLmZhY3RvcnkoJ2Fib3V0RnR5JywgZnVuY3Rpb24gKCRodHRwKSB7XG5cdHZhciBhYm91dEZ0eSA9IHt9O1xuXHRhYm91dEZ0eS5nZXRBYm91dCA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL2Fib3V0Jylcblx0XHRcdC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcblx0XHRcdFx0cmV0dXJuIHJlcy5kYXRhO1xuXHRcdFx0fSlcblx0fVxuXHRyZXR1cm4gYWJvdXRGdHk7XG59KVxuIiwiYXBwLmNvbnRyb2xsZXIoXCJyZXN1bWVDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIHJlc3VtZSwgcHJvamVjdHMsICRyb290U2NvcGUpIHtcblx0JHJvb3RTY29wZS5uYXYgPSB0cnVlO1xuXHQkc2NvcGUuYWJvdXQgPSByZXN1bWU7XG5cdCRzY29wZS5wcm9qZWN0cyA9IHByb2plY3RzO1xuXHQkc2NvcGUucGF0aHBhcmFkb3hJbWdzID0gcHJvamVjdHNbMF0uaW1hZ2VzO1xuXHQkc2NvcGUubW9yZUNhdEltZ3MgPSBwcm9qZWN0c1sxXS5pbWFnZXM7XG59KVxuIiwiYXBwLmNvbmZpZyhmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcblx0JHN0YXRlUHJvdmlkZXIuc3RhdGUoXCJhbGxcIiwge1xuXHRcdFx0dXJsOiBcIi9cIixcblx0XHRcdHRlbXBsYXRlVXJsOiBcIi9qcy9hbGwvYWxsLmh0bWxcIlxuXHRcdH0pXG5cdFx0LnN0YXRlKFwiYWxsLmFydFwiLCB7XG5cdFx0XHR1cmw6IFwiYXJ0XCIsXG5cdFx0XHRjb250cm9sbGVyOiBcImFydEN0cmxcIixcblx0XHRcdHRlbXBsYXRlVXJsOiAnL2pzL2FydC9hcnQuaHRtbCcsXG5cdFx0XHRyZXNvbHZlOiB7XG5cdFx0XHRcdGFydHM6IGZ1bmN0aW9uIChhcnRGdHkpIHtcblx0XHRcdFx0XHRyZXR1cm4gYXJ0RnR5LmdldEFydHMoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0LnN0YXRlKFwiYWxsLmhvbWVcIiwge1xuXHRcdFx0dXJsOiBcImhvbWVcIixcblx0XHRcdHRlbXBsYXRlVXJsOiBcIi9qcy9ob21lL2hvbWUuaHRtbFwiLFxuXHRcdFx0Y29udHJvbGxlcjogXCJob21lQ3RybFwiXG5cdFx0fSlcblx0XHQuc3RhdGUoXCJhbGwucmVzdW1lXCIsIHtcblx0XHRcdHVybDogXCJyZXN1bWVcIixcblx0XHRcdHRlbXBsYXRlVXJsOiBcIi9qcy9hYm91dC9yZXN1bWUuaHRtbFwiLFxuXHRcdFx0Y29udHJvbGxlcjogXCJyZXN1bWVDdHJsXCIsXG5cdFx0XHRyZXNvbHZlOiB7XG5cdFx0XHRcdHJlc3VtZTogZnVuY3Rpb24gKGFib3V0RnR5KSB7XG5cdFx0XHRcdFx0cmV0dXJuIGFib3V0RnR5LmdldEFib3V0KCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHByb2plY3RzOiBmdW5jdGlvbiAocHJvamVjdHNGdHkpIHtcblx0XHRcdFx0XHRyZXR1cm4gcHJvamVjdHNGdHkuZ2V0UHJvamVjdHMoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0LnN0YXRlKFwiYWxsLmFib3V0XCIsIHtcblx0XHRcdHVybDogXCJhYm91dFwiLFxuXHRcdFx0Y29udHJvbGxlcjogXCJhYm91dEN0cmxcIixcblx0XHRcdHRlbXBsYXRlVXJsOiBcIi9qcy9hYm91dC9hYm91dC5odG1sXCJcblx0XHR9KVxuXHRcdC5zdGF0ZShcImFsbC5wcm9qZWN0XCIsIHtcblx0XHRcdHVybDogXCI6bmFtZVwiLFxuXHRcdFx0dGVtcGxhdGVVcmw6IFwiL2pzL3Byb2plY3RzL3Byb2plY3QuaHRtbFwiLFxuXHRcdFx0Y29udHJvbGxlcjogXCJwcm9qZWN0Q3RybFwiLFxuXHRcdFx0cmVzb2x2ZToge1xuXHRcdFx0XHRwcm9qZWN0czogZnVuY3Rpb24gKHByb2plY3RzRnR5KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHByb2plY3RzRnR5LmdldFByb2plY3RzKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KVxuXG59KVxuIiwiYXBwLmNvbnRyb2xsZXIoJ2FydEN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkcm9vdFNjb3BlLCBhcnRzKSB7XG5cdCRyb290U2NvcGUubmF2ID0gdHJ1ZTtcblx0JHNjb3BlLmhpID0gXCJoaVwiXG5cdCRzY29wZS5hcnRzID0gYXJ0cztcblx0JHNjb3BlLmFydCA9IGFydHNbMF1cblxufSlcbiIsImFwcC5mYWN0b3J5KFwiYXJ0RnR5XCIsIGZ1bmN0aW9uICgkaHR0cCkge1xuXHRyZXR1cm4ge1xuXHRcdGdldEFydHM6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiAkaHR0cC5nZXQoJy9hcGkvYXJ0Jylcblx0XHRcdFx0LnRoZW4oZnVuY3Rpb24gKHJlcykge1xuXHRcdFx0XHRcdHJldHVybiByZXMuZGF0YTtcblx0XHRcdFx0fSlcblx0XHR9XG5cdH1cbn0pXG4iLCJhcHAuY29udHJvbGxlcihcImhvbWVDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsICRyb290U2NvcGUpIHtcblx0JHJvb3RTY29wZS5uYXYgPSBmYWxzZTtcbn0pXG4iLCJhcHAuZGlyZWN0aXZlKFwibmF2XCIsIGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogXCJFXCIsXG5cdFx0dGVtcGxhdGVVcmw6IFwiL2pzL25hdi9uYXYuaHRtbFwiXG5cdFx0XHQvLyBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsbSwgYXR0cikge1xuXHRcdFx0Ly8gXHRzY29wZS4kd2F0Y2goZnVuY3Rpb24gKCkge1xuXHRcdFx0Ly8gXHRcdHJldHVybiBuYXZGdHkuZ2V0TmF2KCksXG5cdFx0XHQvLyBcdFx0XHRmdW5jdGlvbiAoYm9vbCkge1xuXHRcdFx0Ly8gXHRcdFx0XHRzY29wZS5uYXYgPSBib29sO1xuXHRcdFx0Ly8gXHRcdFx0fVxuXHRcdFx0Ly8gXHR9KVxuXHRcdFx0Ly8gfVxuXHR9XG59KVxuIiwiYXBwLmNvbnRyb2xsZXIoXCJwcm9qZWN0Q3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBwcm9qZWN0cywgJHN0YXRlUGFyYW1zLCAkcm9vdFNjb3BlKSB7XG5cdCRyb290U2NvcGUubmF2ID0gdHJ1ZTtcblx0aWYgKCRzdGF0ZVBhcmFtcy5uYW1lID09PSBcInBhdGhwYXJhZG94XCIpIHtcblx0XHQkc2NvcGUucHJvamVjdCA9IHByb2plY3RzWzBdO1xuXHRcdCRzY29wZS5wYXRocGFyYWRveCA9IHRydWU7XG5cdH1cblx0aWYgKCRzdGF0ZVBhcmFtcy5uYW1lID09PSBcIm1vcmVjYXRcIikge1xuXHRcdCRzY29wZS5wcm9qZWN0ID0gcHJvamVjdHNbMV07XG5cdFx0JHNjb3BlLm1vcmVjYXQgPSB0cnVlO1xuXHR9XG59KVxuIiwiYXBwLmZhY3RvcnkoJ3Byb2plY3RzRnR5JywgZnVuY3Rpb24gKCRodHRwKSB7XG5cdHZhciBwcm9qZWN0c0Z0eSA9IHt9O1xuXHRwcm9qZWN0c0Z0eS5nZXRQcm9qZWN0cyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3Byb2plY3RzJylcblx0XHRcdC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcblx0XHRcdFx0cmV0dXJuIHJlcy5kYXRhO1xuXHRcdFx0fSlcblx0fVxuXHRyZXR1cm4gcHJvamVjdHNGdHk7XG59KVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
