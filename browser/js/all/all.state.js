app.config(function ($stateProvider) {
	$stateProvider.state("all", {
			url: "/",
			templateUrl: "/js/all/all.html"
		})
		.state("all.home", {
			url: "home",
			templateUrl: "/js/home/home.html",
			controller: "homeCtrl"
		})
		.state("all.resume", {
			url: "resume",
			templateUrl: "/js/about/resume.html",
			controller: "resumeCtrl",
			resolve: {
				resume: function (aboutFty) {
					return aboutFty.getAbout();
				},
				projects: function (projectsFty) {
					return projectsFty.getProjects();
				}
			}
		})
		.state("all.about", {
			url: "about",
			controller: "aboutCtrl",
			templateUrl: "/js/about/about.html"
		})
		.state("all.project", {
			url: ":name",
			templateUrl: "/js/projects/project.html",
			controller: "projectCtrl",
			resolve: {
				projects: function (projectsFty) {
					return projectsFty.getProjects();
				}
			}
		})
})
