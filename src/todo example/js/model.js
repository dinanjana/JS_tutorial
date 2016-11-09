(function (window){
	var noOfTasks = 0;

	function Model (store) {
		this.taskList = new Map();//store.taskList||[];
		this.noOfTasks = 0;//store.noOfTasks|| 0;
		noOfTasks=this.noOfTasks;
		this.noOfCompletedTasks = 0;//store.noOfCompletedTasks || 0;
	}

	function Task (task,completionDate){
		this.taskId = noOfTasks++;
		this.task = task;
		this.completionDate=completionDate;
		this.addedDate = new Date().toString();
		this.completed = false;
	}

	Model.prototype.addTask = function(task,completionDate){
		let new_task = new Task(task,completionDate);
		this.taskList.set(new_task.taskID,new_task);
	}

	Model.prototype.removeTask = (taskId,completed)=>{
		for (var i = 0; i < this.taskList.length ; i++) {
			if(this.taskList[i].taskId == taskId){
				this.taskList.splice(i,1);
				if(completed){
					this.noOfCompletedTasks=++this.noOfCompletedTasks;
				}
				break;
			}
		}
	};

	window.app = window.app || {};
	window.app.Model = Model;
})(window);
