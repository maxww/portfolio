app.controller("projectsCtrl", function ($scope, projects) {
	$scope.projects = projects;
	$scope.pathparadoxImgs = projects[0].images;
	$scope.moreCatImgs = projects[1].images;
})
