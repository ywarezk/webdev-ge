console.log('Welcome to oop');

var Pokemon = function Pokemon(name, power, type){
	var self = this;
	self.name = name;
	self.power = power;
	self.type = type;
	
	self.sayHello = function sayHello(){
		console.log(self.name + ' said hello');
		throw new Error('you must implement this');
	};
	
};



Pokemon.prototype.sayHello2 = function(){
	console.log(this.name);
}

var pikachu = new Pokemon('pikachu', 10, 'lightning');

pikachu.sayHello2();

//pikachu.sayHello();

//setTimeout(pikachu.sayHello, 2000);

//inheritance

/*var SeaPokemon = function SeaPokemon(name, power){
	var self = this;
	
	Pokemon.call(this, name, power, 'sea');
	
	self.sayHello = function swim(){
		
		//console.log('im a sea pokemon soim swimming');
		console.log('sea pokemon named: ' + self.name + ' said hello');
	}
}

var squirtle = new SeaPokemon('squirtle', 5);

squirtle.sayHello();*/

//squirtle.swim();

