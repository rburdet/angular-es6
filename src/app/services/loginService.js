'use strict';

import angular from 'angular';
//class LoginService{
//	constructor(){
//		console.log("constructor login");
//	}
//
//	login(){
//		console.log("login at loginservice");
//	}
//}	
//
//export default LoginService;


export default function LoginService() {
	var isAuthenticated = false;
	return {
		login : function(username, password) {
			isAuthenticated = true;
			return isAuthenticated;
		},
		isAuthenticated : function() {
			return isAuthenticated;
		}
	};
}

