'use strict';

var app = angular.module('portfolio', ['ui.router'])
	.config(function ($urlRouterProvider, $locationProvider) {
		// remove '#' from urls
		$locationProvider.html5Mode(true);

		// invalid routes redirect to the root
		$urlRouterProvider.otherwise('/');
	})

app.controller("aboutCtrl", function ($state, $scope) {
	$scope.about = "about"
})

app.config(function ($stateProvider) {
	$stateProvider.state("about", {
		url: "/about",
		templateUrl: "/js/about/about.html",
		controller: "aboutCtrl"
	})
})

app.controller("contactCtrl", function ($state, $scope) {
	$scope.contact = "contact"
})

app.config(function ($stateProvider) {
	$stateProvider.state("contact", {
		url: "/contact",
		templateUrl: "/js/contact/contact.html",
		controller: "contactCtrl"
	})
})

app.controller("homeCtrl", function ($state, $scope) {
	$scope.hi = "hi"
})

app.config(function ($stateProvider) {
	$stateProvider.state("home", {
		url: "/",
		templateUrl: "/js/home/home.html",
		controller: "homeCtrl"
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

app.controller("projectsCtrl", function ($state, $scope) {
	$scope.projects = "projects"
})

app.config(function ($stateProvider) {
	$stateProvider.state("projects", {
		url: "/projects",
		templateUrl: "/js/projects/projects.html",
		controller: "projectsCtrl"
	})
})

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImFib3V0L2Fib3V0LmN0cmwuanMiLCJhYm91dC9hYm91dC5zdGF0ZS5qcyIsImNvbnRhY3QvY29udGFjdC5jdHJsLmpzIiwiY29udGFjdC9jb250YWN0LnN0YXRlLmpzIiwiaG9tZS9ob21lLmN0cmwuanMiLCJob21lL2hvbWUuc3RhdGUuanMiLCJuYXYvbmF2LmRpcmVjdGl2ZS5qcyIsInByb2plY3RzL3Byb2plY3RzLmN0cmwuanMiLCJwcm9qZWN0cy9wcm9qZWN0cy5zdGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdwb3J0Zm9saW8nLCBbJ3VpLnJvdXRlciddKVxuXHQuY29uZmlnKGZ1bmN0aW9uICgkdXJsUm91dGVyUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKSB7XG5cdFx0Ly8gcmVtb3ZlICcjJyBmcm9tIHVybHNcblx0XHQkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUodHJ1ZSk7XG5cblx0XHQvLyBpbnZhbGlkIHJvdXRlcyByZWRpcmVjdCB0byB0aGUgcm9vdFxuXHRcdCR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcblx0fSlcbiIsImFwcC5jb250cm9sbGVyKFwiYWJvdXRDdHJsXCIsIGZ1bmN0aW9uICgkc3RhdGUsICRzY29wZSkge1xuXHQkc2NvcGUuYWJvdXQgPSBcImFib3V0XCJcbn0pXG4iLCJhcHAuY29uZmlnKGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuXHQkc3RhdGVQcm92aWRlci5zdGF0ZShcImFib3V0XCIsIHtcblx0XHR1cmw6IFwiL2Fib3V0XCIsXG5cdFx0dGVtcGxhdGVVcmw6IFwiL2pzL2Fib3V0L2Fib3V0Lmh0bWxcIixcblx0XHRjb250cm9sbGVyOiBcImFib3V0Q3RybFwiXG5cdH0pXG59KVxuIiwiYXBwLmNvbnRyb2xsZXIoXCJjb250YWN0Q3RybFwiLCBmdW5jdGlvbiAoJHN0YXRlLCAkc2NvcGUpIHtcblx0JHNjb3BlLmNvbnRhY3QgPSBcImNvbnRhY3RcIlxufSlcbiIsImFwcC5jb25maWcoZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG5cdCRzdGF0ZVByb3ZpZGVyLnN0YXRlKFwiY29udGFjdFwiLCB7XG5cdFx0dXJsOiBcIi9jb250YWN0XCIsXG5cdFx0dGVtcGxhdGVVcmw6IFwiL2pzL2NvbnRhY3QvY29udGFjdC5odG1sXCIsXG5cdFx0Y29udHJvbGxlcjogXCJjb250YWN0Q3RybFwiXG5cdH0pXG59KVxuIiwiYXBwLmNvbnRyb2xsZXIoXCJob21lQ3RybFwiLCBmdW5jdGlvbiAoJHN0YXRlLCAkc2NvcGUpIHtcblx0JHNjb3BlLmhpID0gXCJoaVwiXG59KVxuIiwiYXBwLmNvbmZpZyhmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcblx0JHN0YXRlUHJvdmlkZXIuc3RhdGUoXCJob21lXCIsIHtcblx0XHR1cmw6IFwiL1wiLFxuXHRcdHRlbXBsYXRlVXJsOiBcIi9qcy9ob21lL2hvbWUuaHRtbFwiLFxuXHRcdGNvbnRyb2xsZXI6IFwiaG9tZUN0cmxcIlxuXHR9KVxufSlcbiIsImFwcC5kaXJlY3RpdmUoXCJuYXZcIiwgZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4ge1xuXHRcdHJlc3RyaWN0OiBcIkVcIixcblx0XHR0ZW1wbGF0ZVVybDogXCIvanMvbmF2L25hdi5odG1sXCIsXG5cdFx0bGluazogZnVuY3Rpb24gKHNjb3BlLCBlbG0sIGF0dHIpIHtcblxuXHRcdH1cblx0fVxufSlcbiIsImFwcC5jb250cm9sbGVyKFwicHJvamVjdHNDdHJsXCIsIGZ1bmN0aW9uICgkc3RhdGUsICRzY29wZSkge1xuXHQkc2NvcGUucHJvamVjdHMgPSBcInByb2plY3RzXCJcbn0pXG4iLCJhcHAuY29uZmlnKGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuXHQkc3RhdGVQcm92aWRlci5zdGF0ZShcInByb2plY3RzXCIsIHtcblx0XHR1cmw6IFwiL3Byb2plY3RzXCIsXG5cdFx0dGVtcGxhdGVVcmw6IFwiL2pzL3Byb2plY3RzL3Byb2plY3RzLmh0bWxcIixcblx0XHRjb250cm9sbGVyOiBcInByb2plY3RzQ3RybFwiXG5cdH0pXG59KVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
