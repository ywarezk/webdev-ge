
angular.module('AppModule')
	.controller('MainController', ['dateFilter', '$timeout' ,function(dateFilter, $timeout){
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
		
		self.ngClickExample = function ngClickExample(event){
			
			alert('ng click example');
		}
		
		self.ngMouseoverExample = function ngMouseoverExample(){
			console.log('ngMouseoverexample');
		}
		
		self.ngChangeExample = function ngChangeExample(event){
			
			console.log('ngChangeExample');
		}
		
		self.groceryList = ['milk', 'cheese', 'pumpkin'];
		
		self.taskList = [
		                 {id: 1, title: 'hello1'},
		                 {id: 2, title: 'hello2'},
		                 {id: 3, title: 'hello3'}
		                 ];
		
		self.ngClassObject = {
				'is-red': false,
				'is-orange': false
		}
		
		self.ngStyleExample = {
				'height': '100px',
				'width': '100px',
				'background-color': 'orange'
		}
		
		self.myDate = new Date();
		
		self.dateFilterInTheControllerWrongPractice = function dateFilterInTheControllerWrongPractice(){
			
			return self.myDate.toISOString();
		}
		
	}]);