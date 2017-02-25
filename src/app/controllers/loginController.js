'use scrict';
import LoginService from '../services/loginService';

export default ($scope,$rootScope, $stateParams, $state, LoginService) => {
	console.log("login controller");
	$scope.formSubmit = function() {
		LoginService.auth($scope.username, $scope.password).then((loginCorrect) => {
			console.log("REEEEEEESPONSE   "+loginCorrect);
			if (loginCorrect){
				$rootScope.username = $scope.username;
				$scope.error = '';
				$scope.username = '';
				$scope.password = '';
				$state.transitionTo('home');
			} else {
				$scope.error = "Incorrect username/password !";
			}
		})
	}
}


