
//<ge-hello-world>
angular.module('AppModule')
	.directive('geHelloWorld', ['$timeout', function($timeout) {
		return {
			templateUrl: 'src/directives/hello-world/hello-world.template.html',
			scope: {
				greetingDirective: '=greetingAttr',
				sayHello: '&',
				sayHello2: '='
			},
			link: function(scope, element, attrs, controller){
				$timeout(function(){
					scope.greetingDirective = 'wat2';
				}, 4000);
				
				element.on('$destroy', function(){
					console.log('no!!!! ');
				});
			},
			transclude: true
		}
}])