angular.module('AppModule')
	.factory('taskServiceFactory', ['$http','TaskFactory' ,function($http, TaskFactory){
		
		return new function(){
			var self = this;
			
			/**
			 * get tasks objects and return Task[]
			 * @param tasks {Object[]}
			 * @return {Task[]}
			 */
			var _handleData = function _handleData(tasks){
				var res = [];
				for(var i=0; i<tasks.length; i++){
					res.push(new TaskFactory(tasks[i]));
				}
				return res;
			}
			
			/**
			 * get the tasks from the server
			 * @return {Promise<Task[]>}
			 */
			self.getTasks = function getTasks(){
//				return $http({
//					method: 'GET',
//					url: 'https://nztodo.herokuapp.com/api/task/?format=json'
//				})
				return $http.get('https://nztodo.herokuapp.com/api/task/?format=json')
					.then(function(response){
						return _handleData(response.data);
					}, function(){
						console.error('bad communication');
					});
			}
			
			/**
			 * @param task {Task}
			 * @return {Promise<Task>}
			 */
			self.createTask = function createTask(){
				return $http({
					method: 'POST',
					url: 'https://nztodo.herokuapp.com/api/task/',
					data: {
						"title":"hello pokemon",
						"description":"hello yariv",
						"group":"yariv-katz",
						"when":"2016-09-01T15:10:42Z"
					}					
				});
//				return $http.get
			}
			
			
		}
		
	}]);