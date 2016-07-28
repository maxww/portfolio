app.directive("nav", function () {
	return {
		restrict: "E",
		templateUrl: "/js/nav/nav.html",
		link: function (scope, elm, attr) {
			// 	elm.on("mouseenter", function () {
			// 		scope.showHome = true;
			// 		console.log("show home", scope.showHome)
			// 	})
		}
	}
})
