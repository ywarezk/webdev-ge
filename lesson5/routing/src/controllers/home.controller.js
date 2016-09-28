
angular.module('AppModule')
	.controller('HomeController', ['$state', function($state){
		var self = this;
		
		/**
		 * direct to the single task page
		 */
		self.gotoSingleTask = function gotoSingleTask(){
			$state.go('singleTask', {id: 4, slug: 'hello-world'});
		}
	}]);