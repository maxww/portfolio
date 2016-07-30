app.factory("artFty", function ($http) {
	return {
		getArts: function () {
			return $http.get('/api/art')
				.then(function (res) {
					return res.data;
				})
		}
	}
})
