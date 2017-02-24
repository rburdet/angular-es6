import angular from 'angular';
import route from './routes';
import uiRouter from 'angular-ui-router';
import LoginService from './services/loginService';



//class AppCtrl {
//  constructor() {
//    this.url = 'https://github.com/preboot/angular-webpack';
//  }
//}

const MODULE_NAME = 'inbox';

angular.module(MODULE_NAME, [uiRouter])
	.factory('LoginService',LoginService)
	.config(route);

