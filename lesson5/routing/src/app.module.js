

angular.module('AppModule', ['ui.router'])
	.config(['$stateProvider', function($stateProvider){	
		$stateProvider.state('home', {
			url: '/',
			controller: 'HomeController as ctrl',
			templateUrl: 'src/templates/home.template.html'
		})
		.state('about', {
			url: '/about',
			controller: 'AboutController as ctrl',
			templateUrl: 'src/templates/about.template.html'
		})
		.state('parentTasks', {
			abstract: true,
			template: '<ui-view></ui-view>',
			resolve: {
				tasks: ['$http', function($http){
					return $http({
						method: 'GET',
						url: 'https://nztodo.herokuapp.com/api/task/?format=json'
					});
				}]
			}
		})
		.state('parentTasks.tasksList', {
			url: '/tasks',
			controller: 'TaskListController as ctrl',
			templateUrl: 'src/templates/task-list.template.html',
		})
		.state('parentTasks.singleTask', {
			url: '/:id/:slug?',
			controller: 'SingleTaskController as ctrl',
			templateUrl: 'src/templates/single-task.template.html'
		});
	}])
	.config(['$urlRouterProvider', '$locationProvider', function($urlRouterProvider, $locationProvider){
		$urlRouterProvider.otherwise('/');
		$locationProvider.html5Mode(true);		
	}]);