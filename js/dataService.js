var dataservice = (function() {
	var api = {
		getVarietalList : function() {
			return $.get('/getVarietalList');
		},
		getWines : function() {
			return $.get('/getWines');
		},
		getWineColors : function() {
			return $.get('/getWineColors');
		}
	};
	return api;
})();