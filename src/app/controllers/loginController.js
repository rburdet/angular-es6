'use scrict';
import LoginService from '../services/loginService';

export default ($scope,$rootScope, $stateParams, $state, LoginService) => {
	$scope.formSubmit = function() {
		if (LoginService.login($scope.username, $scope.password)) {
			$rootScope.username = $scope.username;
			$scope.error = '';
			$scope.username = '';
			$scope.password = '';
			$state.transitionTo('home');
		} else {
			$scope.error = "Incorrect username/password !";
		}   
	}
}


