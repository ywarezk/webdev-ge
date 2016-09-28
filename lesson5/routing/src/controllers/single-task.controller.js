
angular.module('AppModule')
	.controller('SingleTaskController', ['$stateParams', 'tasks', function($stateParams, tasks){
		var self = this;
		
		console.log('id: ' + $stateParams.id);
		console.log('slug: ' + $stateParams.slug);
		
		for(var i=0; i<tasks.data.length; i++){
			if(tasks.data[i].id == $stateParams.id){
			
				self.task = tasks.data[i];
				break;
			}
		}
	}]);