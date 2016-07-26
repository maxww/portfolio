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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImFib3V0L2Fib3V0LmN0cmwuanMiLCJhYm91dC9hYm91dC5zdGF0ZS5qcyIsImNvbnRhY3QvY29udGFjdC5jdHJsLmpzIiwiY29udGFjdC9jb250YWN0LmZ0eS5qcyIsImNvbnRhY3QvY29udGFjdC5zdGF0ZS5qcyIsImhvbWUvaG9tZS5jdHJsLmpzIiwiaG9tZS9ob21lLnN0YXRlLmpzIiwibmF2L25hdi5kaXJlY3RpdmUuanMiLCJwcm9qZWN0cy9wcm9qZWN0cy5jdHJsLmpzIiwicHJvamVjdHMvcHJvamVjdHMuc3RhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ3BvcnRmb2xpbycsIFsndWkucm91dGVyJ10pXG5cdC5jb25maWcoZnVuY3Rpb24gKCR1cmxSb3V0ZXJQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIpIHtcblx0XHQvLyByZW1vdmUgJyMnIGZyb20gdXJsc1xuXHRcdCRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh0cnVlKTtcblxuXHRcdC8vIGludmFsaWQgcm91dGVzIHJlZGlyZWN0IHRvIHRoZSByb290XG5cdFx0JHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuXG5cdH0pXG4iLCJhcHAuY29udHJvbGxlcihcImFib3V0Q3RybFwiLCBmdW5jdGlvbiAoJHN0YXRlLCAkc2NvcGUpIHtcblx0JHNjb3BlLmFib3V0ID0gXCJhYm91dFwiXG59KVxuIiwiYXBwLmNvbmZpZyhmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcblx0JHN0YXRlUHJvdmlkZXIuc3RhdGUoXCJhYm91dFwiLCB7XG5cdFx0dXJsOiBcIi9hYm91dFwiLFxuXHRcdHRlbXBsYXRlVXJsOiBcIi9qcy9hYm91dC9hYm91dC5odG1sXCIsXG5cdFx0Y29udHJvbGxlcjogXCJhYm91dEN0cmxcIlxuXHR9KVxufSlcbiIsImFwcC5jb250cm9sbGVyKFwiY29udGFjdEN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgY29udGFjdEluZm8pIHtcblx0JHNjb3BlLmNvbnRhY3QgPSBjb250YWN0SW5mb1xufSlcbiIsImFwcC5mYWN0b3J5KCdjb250YWN0RnR5JywgZnVuY3Rpb24gKCRodHRwKSB7XG5cdHZhciBjb250YWN0RnR5ID0ge307XG5cdGNvbnRhY3RGdHkuZ2V0Q29udGFjdEluZm8gPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICRodHRwLmdldCgnL2FwaS9jb250YWN0Jylcblx0XHRcdC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcblx0XHRcdFx0cmV0dXJuIHJlcy5kYXRhLmNvbnRhY3Q7XG5cdFx0XHR9KVxuXHR9XG5cdHJldHVybiBjb250YWN0RnR5O1xufSlcbiIsImFwcC5jb25maWcoZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG5cdCRzdGF0ZVByb3ZpZGVyLnN0YXRlKFwiY29udGFjdFwiLCB7XG5cdFx0dXJsOiBcIi9jb250YWN0XCIsXG5cdFx0dGVtcGxhdGVVcmw6IFwiL2pzL2NvbnRhY3QvY29udGFjdC5odG1sXCIsXG5cdFx0Y29udHJvbGxlcjogXCJjb250YWN0Q3RybFwiLFxuXHRcdHJlc29sdmU6IHtcblx0XHRcdGNvbnRhY3RJbmZvOiBmdW5jdGlvbiAoY29udGFjdEZ0eSkge1xuXHRcdFx0XHRyZXR1cm4gY29udGFjdEZ0eS5nZXRDb250YWN0SW5mbygpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSlcbn0pXG4iLCJhcHAuY29udHJvbGxlcihcImhvbWVDdHJsXCIsIGZ1bmN0aW9uICgkc3RhdGUsICRzY29wZSkge1xuXHQkc2NvcGUuaGkgPSBcImhpXCJcbn0pXG4iLCJhcHAuY29uZmlnKGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuXHQkc3RhdGVQcm92aWRlci5zdGF0ZShcImhvbWVcIiwge1xuXHRcdHVybDogXCIvXCIsXG5cdFx0dGVtcGxhdGVVcmw6IFwiL2pzL2hvbWUvaG9tZS5odG1sXCIsXG5cdFx0Y29udHJvbGxlcjogXCJob21lQ3RybFwiXG5cdH0pXG59KVxuIiwiYXBwLmRpcmVjdGl2ZShcIm5hdlwiLCBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB7XG5cdFx0cmVzdHJpY3Q6IFwiRVwiLFxuXHRcdHRlbXBsYXRlVXJsOiBcIi9qcy9uYXYvbmF2Lmh0bWxcIixcblx0XHRsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsbSwgYXR0cikge1xuXG5cdFx0fVxuXHR9XG59KVxuIiwiYXBwLmNvbnRyb2xsZXIoXCJwcm9qZWN0c0N0cmxcIiwgZnVuY3Rpb24gKCRzdGF0ZSwgJHNjb3BlKSB7XG5cdCRzY29wZS5wcm9qZWN0cyA9IFwicHJvamVjdHNcIlxufSlcbiIsImFwcC5jb25maWcoZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG5cdCRzdGF0ZVByb3ZpZGVyLnN0YXRlKFwicHJvamVjdHNcIiwge1xuXHRcdHVybDogXCIvcHJvamVjdHNcIixcblx0XHR0ZW1wbGF0ZVVybDogXCIvanMvcHJvamVjdHMvcHJvamVjdHMuaHRtbFwiLFxuXHRcdGNvbnRyb2xsZXI6IFwicHJvamVjdHNDdHJsXCJcblx0fSlcbn0pXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
