app.config(function ($stateProvider) {
	$stateProvider.state("home", {
		url: "/",
		templateUrl: "/js/home/home.html",
		controller: "homeCtrl",
		resolve: {
			home: function (homeFty) {
				return homeFty.getHome();
			}
		}
	})
})