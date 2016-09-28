
angular.module('AppModule')
	.controller('MainController', ['$scope', '$timeout', function($scope, $timeout){
		var self = this;
		
//		self.greeting = 'Hello world';
		
		self.greeting = 'hello from main controller';
		
		self.isShowDirective = true;
		
		$timeout(function(){
			self.greeting = 'wat?';
			self.isShowDirective = false;
		}, 3000);
		
		self.sayHelloFromController = function sayHelloFromController(msg){
			console.log(msg);
		}
		
		self.messageFromParent = 'hi directive from parent';
		
	}]);