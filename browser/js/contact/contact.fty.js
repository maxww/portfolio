app.factory('contactFty', function ($http) {
	var contactFty = {};
	contactFty.getContactInfo = function () {
		return $http.get('/api/contact')
			.then(function (res) {
				return res.data.contact;
			})
	}
	return contactFty;
})
