(function  (window) {

	function LocalStorage(name){
		this.name = name;
		if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
				if(localStorage.getItem(name)==null){
					this.storage = {};
				}else{
					this.storage = JSON.parse(localStorage.getItem(name));
					console.log('Local storage is found' +this.storage);
				}
		} else {
    // Sorry! No Web Storage support..
    		this.storage = {};
		}
	}

	LocalStorage.prototype={
		addItem:(task)=>{
			this.storage.taskList.push(task);
		},

		removeItem:(taskID)=>{
			let taskList=this.storage.taskList;
			let len = this.storage.taskList.length;
			for (var i=0; i<len ; i++ ){
				if(taskList[i].taskID == taskID){
					taskList.splice(i,1);
					break;
				}
			}
		},

		cleanup:function(model){
			return function(){
				let arr=[];
				model.taskList.forEach((task)=>{
						arr.push(task);
				});
				model.taskListasArray = arr;
				localStorage.setItem('todoApp',JSON.stringify(model.taskListasArray));
				console.log('All data persisted!' + this.name);
			}
		},
	}


	window.app=window.app||{};
	window.app.LocalStorage=LocalStorage;
})(window);
