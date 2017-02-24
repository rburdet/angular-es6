import loginCtrl from './controllers/loginController';

function route($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/login');
	$stateProvider.state('login', {
		url: '/login',
		templateUrl : 'partials/login.html',
	controller : loginCtrl,
	controllerAs : loginCtrl
});
}

export default route;
