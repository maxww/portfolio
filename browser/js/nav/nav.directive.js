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
