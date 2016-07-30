app.controller('artCtrl', function ($scope, $rootScope, arts) {
	$rootScope.nav = true;
	$scope.hi = "hi"
	$scope.arts = arts;
	$scope.art = arts[0]

})
