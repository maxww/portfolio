app.factory('aboutFty', function ($http) {
	var aboutFty = {};
	aboutFty.getAbout = function () {
		return $http.get('/api/about')
			.then(function (res) {
				return res.data.about;
			})
	}
	return aboutFty;
})
