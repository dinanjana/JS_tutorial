(function (window){

/*This object represents model and responsible for holding
it in memory*/
	function Model (store) {
		this.taskList = new Map();
		this.noOfCompletedTasks = store.noOfCompletedTasks||0;
		for (var i in store){
			this.taskList.set(i,store[i]);
		}
		this.noOfTasks = this.taskList.size;
	}

	function Task (task,completionDate,id){
		this.taskId = id.toString();
		this.task = task;
		this.completionDate=completionDate;
		this.addedDate = new Date().toString();
		this.completed = false;
	}

	Model.prototype.addTask=function(task,completionDate){
		let new_task = new Task(task,completionDate,this.noOfTasks);
		this.taskList.set(new_task.taskId,new_task);
		++this.noOfTasks;
	};

	Model.prototype.removeTask=function(taskId,completed){
		this.taskList.delete(taskId);
	};

	Model.prototype.editTask=function(id,task,completionDate,completed){
		let prevtask=this.taskList.get(id.toString());
		if(task){
			prevtask.task = task;
		}
		if(completionDate){
			prevtask.completionDate=completionDate;
		}
		if(completed){
			prevtask.completed=completed;
		}
		this.taskList.set(prevtask.taskId.toString(),prevtask);
	};

	Model.prototype.getCompleted=function(){
		let ret = [];
		this.taskList.forEach((task)=>{
			if(task.completed){
				ret.push(task);
			}
		});
		return ret;
	};

	Model.prototype.getActive=function(){
		let ret = [];
		this.taskList.forEach((task)=>{
			if(!task.completed){
				ret.push(task);
			}
		});
		return ret;
	};

	window.app = window.app || {};
	window.app.Model = Model;
})(window);
