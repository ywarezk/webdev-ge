
angular.module('AppModule').factory('pokemonFactory', function(){
	
	console.log('will only run once');
	
	return new function(name){
		var self = this;
		
		self.name = name;
		
		self.sayHello = function sayHello(){
			console.log(self.name + ' said hello');
		}
	}
});