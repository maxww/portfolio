app.config(function ($stateProvider) {
	$stateProvider
		.state("projects", {
			url: "/projects",
			templateUrl: "/js/projects/projects.html",
			controller: "projectsCtrl",
			resolve: {
				projects: function (projectsFty) {
					return projectsFty.getProjects();
				}
			}
		})
		.state("project", {
			url: "/projects/:name",
			templateUrl: "/js/projects/project.html",
			controller: "projectCtrl",
			resolve: {
				projects: function (projectsFty) {
					return projectsFty.getProjects();
				}
			}
		})
})
