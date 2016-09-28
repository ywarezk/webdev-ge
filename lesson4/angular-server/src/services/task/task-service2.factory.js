angular.module('AppModule')
	.factory('taskServiceResourceFactory', ['$resource','TaskFactory' ,function($resource, TaskFactory){
		
		return new function(){
			var self = this;
			
			/**
			 * get tasks objects and return Task[]
			 * @param tasks {Object[]}
			 * @return {Task[]}
			 */
			var _handleData = function _handleData(response){				
				var tasks = JSON.parse(response);
				var res = [];
				for(var i=0; i<tasks.length; i++){
					res.push(new TaskFactory(tasks[i]));
				}
				return res;
			}
			
			/**
			 * get single task
			 * @return {Task}
			 */
			var _handleDataPost = function _handleDataPost(response){				
				var tasks = JSON.parse(response);
				return new TaskFactory(tasks);
			}
			
			/**
			 * will create $resource class
			 * @returns {$resource}
			 */
			var _createResource = function _createResource(){
				return $resource('https://nztodo.herokuapp.com/api/task/', {format: 'json'}, {
					get: {
						method: 'GET',
						isArray: true,						
						transformResponse: _handleData
					},
					save: {
						method: 'POST',
						transformResponse: _handleDataPost
					}
				});
			}
			
			
			
			
			
			/**
			 * get the tasks from the server
			 * @return {$resource<Task[]>}
			 */
			self.getTasks = function getTasks(){
				var res = _createResource();
				return res.get();
			}
			
			/**
			 * @param task {Task}
			 * @return {Promise<Task>}
			 */
			self.createTask = function createTask(task){
				var res = _createResource();
				var resInst = new res();
				var dictTask = task.toDict();
				var keys = Object.keys(dictTask);
				for(var i=0; i<keys.length; i++){
					resInst[keys[i]] = dictTask[keys[i]];
				}
				debugger;
				resInst.$save();
			}
			
			
		}
		
	}]);