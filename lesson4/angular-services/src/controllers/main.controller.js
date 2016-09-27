
angular.module('AppModule')
	.controller('MainController', ['SERVER_URL', 'SERVER_URL2', 'PokemonFactory', function(SERVER_URL, SERVER_URL2, PokemonFactory){
		var self = this;
		
		self.greeting = 'Hello world';
		
		self.serverUrl = SERVER_URL;
		self.serverUrl2 = SERVER_URL2;
		
		self.myPokemon = new PokemonFactory('pikachu');
		self.myPokemon.sayHello();
	}]);