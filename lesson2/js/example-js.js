

//promise example

//console.log('0');
var promise = new Promise(function(resolve, reject){
	//console.log('1');
	setTimeout(function(){
		//console.log('5');
		resolve('hello');
	});
});

//console.log('2');
function successPromise(message){
	console.log('6');
	console.log(message);
}

function errorPromise(error){
	console.error(error.message);
}

//console.log('3');
//promise.then(successPromise, errorPromise);

//console.log('4');

//promise example with server


console.log('1');
var promiseServer = new Promise(function(res, rej){
	console.log('2');
	var req = new XMLHttpRequest();
	req.open('GET', 'https://nztodo.herokuapp.com/api/tasksdfsd/?format=json');
	req.addEventListener('load', function(){
		// event happens when server responds
		if(this.status === 404){
			res(new Error('bad url'));
		} else{
			res(this.responseText);
		}
		
	});
	req.send();
	console.log('3');
});

console.log('4');
promiseServer.then(successPromise, errorPromise);

console.log('5');