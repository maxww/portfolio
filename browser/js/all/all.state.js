app.config(function ($stateProvider) {
	$stateProvider.state("all", {
			url: "/taffy",
			templateUrl: "/js/all/all.html"
		})
		.state("all.resume", {
			url: "/resume",
			templateUrl: "/js/about/resume.html",
			controller: "aboutCtrl",
			resolve: {
				about: function (aboutFty) {
					return aboutFty.getAbout();
				},
				projects: function (projectsFty) {
					return projectsFty.getProjects();
				}
			}
		})
		.state("all.about", {
			url: "/about",
			templateUrl: "/js/about/about.html"
		})
		.state("all.contact", {
			url: "/contact",
			templateUrl: "/js/contact/contact.html",
			controller: "contactCtrl",
			resolve: {
				contactInfo: function (contactFty) {
					return contactFty.getContactInfo();
				}
			}
		})
		.state("all.projects", {
			url: "/projects",
			templateUrl: "/js/projects/projects.html",
			controller: "projectsCtrl",
			resolve: {
				projects: function (projectsFty) {
					return projectsFty.getProjects();
				}
			}
		})
		.state("all.project", {
			url: "/:name",
			templateUrl: "/js/projects/project.html",
			controller: "projectCtrl",
			resolve: {
				projects: function (projectsFty) {
					return projectsFty.getProjects();
				}
			}
		})
})
