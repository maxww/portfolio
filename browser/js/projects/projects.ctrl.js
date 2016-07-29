app.controller("projectsCtrl", function ($scope, projects) {
		$scope.projects = projects;
		$scope.pathparadoxImgs = projects[0].images;
		$scope.moreCatImgs = projects[1].images;
	})
	.controller("projectCtrl", function ($scope, projects, $stateParams) {
		if ($stateParams.name === "pathparadox") {
			$scope.project = projects[0];
			$scope.pathparadox = true;
		}
		if ($stateParams.name === "morecat") {
			$scope.project = projects[1];
			$scope.morecat = true;
		}
	})
