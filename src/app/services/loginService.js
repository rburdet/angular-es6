'use strict';

import angular from 'angular';
import BPMRest from '../../../lib/bpm-rest';
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
		},
		auth : (username,password) => {
			var bpm = new BPMRest(username,password);
			return bpm.testLogin();
		}
	};
}

