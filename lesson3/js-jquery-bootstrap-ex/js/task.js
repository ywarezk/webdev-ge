




var promise = $.ajax('https://nztodo.herokuapp.com/api/task/?format=json', {
	method: 'GET'
});

promise.then(function(response){
	for(var i=0; i<response.length; i++){
		var singleTask = response[i];
		$('#task-list').append(`
				<div class="col-xs-12 col-sm-6 col-md-4" style="border: 1px solid black">
					<div>
						<h1> `
						 + singleTask.title +
						`</h1>
					</div>
					<div>
						<h5> `
						+ singleTask.description + 
						`</h5>
					</div>
				</div>
		`);
	}
}, function(){
	
});