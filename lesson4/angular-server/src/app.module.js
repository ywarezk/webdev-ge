

angular.module('AppModule', ['ngResource'])
	.config(['$resourceProvider', function($resourceProvider){
		$resourceProvider.defaults.stripTrailingSlashes = false;
	}]);

