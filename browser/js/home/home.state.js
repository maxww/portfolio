app.config(function ($stateProvider) {
	$stateProvider.state("home", {
		url: "/home",
		templateUrl: "/js/home/home.html",
		controller: "homeCtrl",
		resolve: {
			home: function (homeFty) {
				return homeFty.getHome();
			}
		}
	})
})
