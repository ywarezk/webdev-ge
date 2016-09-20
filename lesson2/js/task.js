/**
 * Task class
 */

/**
 * Task class constructor
 * @param obj {Object}
 */
var Task = function Task(obj){
	
	var self = this;
	var _obj = obj;
	var _url = 'https://nztodo.herokuapp.com/api/task/';
	
	/**
	 * this will communicate with the server and return promise
	 * @return {Promise}
	 */
	self.save = function save(){
		var promise = new Promise(function(resolve, reject){
			var req = new XMLHttpRequest();
			if (_obj.id){
				req.open('PUT', _url + _obj.id + '/');
			} else{
				req.open('POST', _url);
			}
			req.setRequestHeader('Content-Type', 'application/json');
			req.addEventListener('load', function(){
				if (this.status !=201 && this.status != 202){
					reject(this);
				} else {
					resolve(JSON.parse(this.responseText));
				}
			});
			req.send(JSON.stringify(_obj));
		});
		return promise;
	}
}

var t1 = new Task({
	title: 'hello pokemon', 
	description: 'stam', 
	group: 'yariv-katz',
	when: (new Date()).toISOString()
});
t1.save().then(function(){
	console.log('success');
}, function(){
	console.log('error');
});

var t2 = new Task({
	id: 8548,
	title: 'hello pokemon', 
	description: 'stam', 
	group: 'yariv-katz',
	when: (new Date()).toISOString()
});
t2.save();