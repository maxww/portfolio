app.factory('homeFty', function ($http) {
	var homeFty = {};
	homeFty.getHome = function () {
		return $http.get('/api/home')
			.then(function (res) {
				return res.data.home;
			})
	}
	return homeFty;
})
