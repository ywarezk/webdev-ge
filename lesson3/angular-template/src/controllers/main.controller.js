
angular.module('AppModule')
	.controller('MainController', function($timeout){
		var self = this;
		
		self.greeting = 'Hello world';
		
		self.sayHello = function sayHello(){
			return self.greeting + ' hello from function';
		}
		
		self.username = 'ywarezk';
		self.alertUsername = function alertUsername(){
			alert(self.username);
		}
		
		self.clearUsername = function clearUsername(){
			self.username = '';
		}
		
//		$timeout(function(){
//			self.username = 'timeout';
//		}, 3000)
		
	});