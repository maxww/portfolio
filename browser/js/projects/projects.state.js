app.config(function ($stateProvider) {
	$stateProvider.state("projects", {
		url: "/projects",
		templateUrl: "/js/projects/projects.html",
		controller: "projectsCtrl",
		resolve: {
			projects: function (projectsFty) {
				return projectsFty.getProjects();
			}
		}
	})
})
