
angular.module('AppModule')
	.factory('TaskFactory', function(){
		
		
		return function(dict){
			var self = this;
			
			/**
			 * private members
			 */
			var _id,_title,_description,_when,_group;
			
			/**
			 * private functions
			 */
			var _fromDict = function _fromDict(dict){
				_id = dict.id;
				_title = dict.title;
				_description = dict.description;
				_when = dict.when;
				_group = dict.group
			}
			
			self.getTitle = function getTitle(){
				return _title;
			}
			
			self.setTitle = function setTitle(title){
				_title = title;
			}
			
			self.toDict = function toDict(){
				return {
					id: _id,
					title: _title,
					description: _description,
					group: _group,
					when: _when
				}
			}
			
			_fromDict(dict);
			
		}
		
	});