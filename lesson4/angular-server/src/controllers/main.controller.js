
angular.module('AppModule')
	.controller('MainController', ['taskServiceFactory', 'taskServiceResourceFactory', function(taskServiceFactory, taskServiceResourceFactory){
		var self = this;
		
		self.greeting = 'Hello world';
		
//		taskServiceFactory.getTasks().then(function(tasks){
//			self.tasks = tasks;
//		});
		
//		taskServiceFactory.createTask().then(function(response){
//			self.createdTask = response.data;
//		});
		
		self.tasks = taskServiceResourceFactory.getTasks();
	}]);