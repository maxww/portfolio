app.controller("resumeCtrl", function ($scope, resume, projects, $rootScope) {
	$rootScope.nav = true;
	$scope.about = resume;
	$scope.projects = projects;
	$scope.pathparadoxImgs = projects[0].images;
	$scope.moreCatImgs = projects[1].images;
})
