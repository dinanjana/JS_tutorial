(function  (window) {
	// body...
	function Storage(name){
		if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    		this.storage = JSON.parse(localStorage.name);
		} else {
    // Sorry! No Web Storage support..
    		this.storage = [];
		}		
		
	}

	Storage.prototype.addItem=(task)=>{
		this.storage.taskList.push(task);
	}

	Storage.prototype.removeItem=(taskID)=>{
		let taskList=this.storage.taskList;
		let len = this.storage.taskList.length;
		for (var i=0; i<len ; i++ ){
			if(taskList[i].taskID == taskID){
				taskList.splice(i,1);
				break;
			}
		}
		//this.storage.taskList=taskList;
	}

	window.app=window.app||{};
	window.app.Storage=Storage;
})(window);