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
