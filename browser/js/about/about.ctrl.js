app.controller("aboutCtrl", function ($scope, about, projects) {
	$scope.about = about;
	$scope.projects = projects;
	$scope.pathparadoxImgs = projects[0].images;
	$scope.moreCatImgs = projects[1].images;
})
