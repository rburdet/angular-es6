import loginCtrl from './controllers/loginController';

function route($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/login');
	$stateProvider.state('login', {
		url: '/login',
		templateUrl : 'partials/login.html',
	controller : loginCtrl
	})
		.state('home',{
			url: '/home',
			templateUrl : 'partials/home.html'
		});
}

export default route;
