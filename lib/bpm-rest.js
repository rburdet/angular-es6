'use strict';

class BPMRest{
	constructor(username, password){
		this.username = username;
		this.password = password;
	}

	auth(){
		return 'Basic ' + btoa(this.username + ':' + this.password);
	}

	fetchProcesses(){
		var url = '/kie-server/services/rest/server/queries/processes/definitions';
		return fetch(url,{
			method: 'GET',
			headers: { 
				'Authorization' : this.auth(),
				'Accept' : 'application/json'
			}
		}).then(function(response){
			return response.json();
		});
	}

	testLogin(){
		var url = 'http://httpbin.org/basic-auth/user/passwd';
		return fetch(url,{
			method: 'GET',
			headers: { 
				'Authorization' : this.auth(),
				'Accept' : 'application/json'
			}
		}).then((response) => {
			return response.status != 401;
		});
	}

}

export default BPMRest;
