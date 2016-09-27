

angular.module('AppModule').filter('zigzag', function(){
	
	return function(input, number){
		var result = "";
		for(var i=0; i< number; i++){
			if(i % 2 == 0){
				result += input[i].toUpperCase();
			} else {
				result += input[i].toLowerCase();
			}
		}
		return result;
	}
	
})