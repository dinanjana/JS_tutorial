(function (window){

	function Model (store) {
		this.taskList = new Map();//store.taskList||[];
		this.noOfTasks = 0;//store.noOfTasks|| 0;
		this.noOfCompletedTasks = 0;//store.noOfCompletedTasks || 0;
	}

	function Task (task,completionDate,id){
		this.taskId = id;
		this.task = task;
		this.completionDate=completionDate;
		this.addedDate = new Date().toString();
		this.completed = false;
	}

	Model.prototype.addTask = function(task,completionDate){
		let new_task = new Task(task,completionDate,this.noOfTasks++);
		this.taskList.set(new_task.taskId,new_task);
	}

	Model.prototype.removeTask = function(taskId,completed){
		this.taskList.delete(taskId);
	}

	Model.prototype.editTask = function(id,task,completionDate,completed){
		let prevtask=this.taskList.get(id);
		if(task){
			prevtask.task = task;
		}
		if(completionDate){
			prevtask.completionDate=completionDate;
		}
		if(completed){
			prevtask.completed=completed;
		}
		this.taskList.set(prevtask.taskId,prevtask);
	}
	window.app = window.app || {};
	window.app.Model = Model;
})(window);
