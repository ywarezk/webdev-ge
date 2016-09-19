

// Variable declaration

var myNumber = 10;
var myBoolean = true;
var myString = "hello wrold";


//scope of vars
//function myScope(isBoolean){
//	if(isBoolean){
//		var message = 'hello world';
//	}
//	console.log(message);
//}
//
//for(var i=0; i<10; i++){
//	for(var i=0; i<10; i++){
//		console.log(i);
//	}
//}

var myArray = ['pokemon', 'pikachu', 'squirtle', 5, true];
var myArray2 = new Array();

myArray.push(false);

console.log(myArray.length);



var myDict = {
	title: 'my title',
	description: 'my description'
}

myDict['title'] = 'title2';
console.log(myDict.title);

myDict['obj'] = {hello: 'world'};
console.log(myDict['obj']['hello']);

console.log(JSON.stringify(myDict));



var myNull = null;





//if else switch case
console.log(4 === "4");



if(myNumber === "10"){
	console.log('true');
	
} else {
	console.log('false');
}

if(myNumber !== "10"){
	console.log('true');
	
} else {
	console.log('false');
}

if(myNumber != "10"){
	console.log('true');
	
} else {
	console.log('false');
}

if(myNumber){
	console.log('true');	
} else {
	console.log('false');
}

switch(myNumber){
	case "10":
		console.log('my number as string');
		break;
	default:
		console.log('default');
}


// for while do while
for(var i=0; i < "10"; i++){
	console.log(i);
}


do{
	console.log('do while');
}while(i < 10);

while(i < 20){
	console.log(i);
	i++;
}



for(var item of myArray){
	console.log(item);
}



// Functions

var myFunc = function myFunc(obj){
	return function(){
		console.log('function in function');
	};
}

var myFuncReturn = myFunc();

myFuncReturn();

function sayHello(){
	console.log('hello im in say hello');
}

sayHello();

//Promise
var promise = new Promise(function(resolve, reject){
	var req = new XMLHttpRequest();
	req.open('GET', 'https://nztodo.herokuapp.com/api/task/?format=json');
	req.addEventListener('load', function(){
		debugger;
		resolve(this.responseText);
	});
	req.send();
});

promise.then(function mySuccess(data){
	
	console.log(data);
	
	
}, function myFailure(data){
	console.warn('promise error');
	console.error(data);
	
});

console.log('written after promise');


















