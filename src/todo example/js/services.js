(function  (window) {

	function LocalStorage(name){
		if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
				if(localStorage.getItem(name)==null){
					this.storage = {};
				}else{
					this.storage = JSON.parse(localStorage.getItem(name));
				}
		} else {
    // Sorry! No Web Storage support..
    		this.storage = {};
		}
	}

	LocalStorage.prototype.addItem=(task)=>{
		this.storage.taskList.push(task);
	}

	LocalStorage.prototype.removeItem=(taskID)=>{
		let taskList=this.storage.taskList;
		let len = this.storage.taskList.length;
		for (var i=0; i<len ; i++ ){
			if(taskList[i].taskID == taskID){
				taskList.splice(i,1);
				break;
			}
		}
	}

	LocalStorage.prototype.cleanup=(name)=>{
		localStorage.setItem(name,this.storage);
	}

	window.app=window.app||{};
	window.app.LocalStorage=LocalStorage;
})(window);
