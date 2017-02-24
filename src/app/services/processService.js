'use strict';

class ProcessService{
	constructor(){
		console.log("constructor process sservice");
	}

	getProcesses(){
		console.log("get Processes at loginservice");
	}

}

export default ProcessService

//module.exports = function(){
//	return {
//		getProcesses : function(){
//			var rest = new BPMRest("superuser","superuser12!");
//			return rest.fetchProcesses();
//		}
//	}
//}
