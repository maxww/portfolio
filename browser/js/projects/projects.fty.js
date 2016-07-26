app.factory('projectsFty', function ($http) {
	var projectsFty = {};
	projectsFty.getProjects = function () {
		return $http.get('/api/projects')
			.then(function (res) {
				return res.data.projects;
			})
	}
	return projectsFty;
})
