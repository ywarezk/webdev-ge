
angular.module('AppModule')
	.controller('MainController', ['taskServiceFactory', 'taskServiceResourceFactory', 'TaskFactory', function(taskServiceFactory, taskServiceResourceFactory, TaskFactory){
		var self = this;
		
		self.greeting = 'Hello world';
		
//		taskServiceFactory.getTasks().then(function(tasks){
//			self.tasks = tasks;
//		});
		
//		taskServiceFactory.createTask().then(function(response){
//			self.createdTask = response.data;
//		});
		
		self.tasks = taskServiceResourceFactory.getTasks();
		
		var task = new TaskFactory({			
			"title":"hello pokemon",
			"description":"hello yariv",
			"group":"yariv-katz",
			"when":"2016-09-01T15:10:42Z"			
		});
		
		var resource = taskServiceResourceFactory.createTask(task).then(function(task){
			self.createdTask = task;
		});
		
	}]);