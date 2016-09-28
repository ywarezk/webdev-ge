
angular.module('AppModule')
	.controller('TaskListController', ['tasks', function(tasks){
		var self = this;
		self.greeting = 'hello world';
		self.tasks = tasks.data;
	}]);