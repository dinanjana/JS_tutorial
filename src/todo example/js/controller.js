(function (window){

	function Controller(model,view){
		this.model = model;
		this.view = view;
	}

	Controller.prototype.addTask = (task,completionDate)=>{
		model.addTask(task,completionDate);
	}

	Controller.prototype.removeTask=(taskId,completed)=>{
		model.removeTask(taskId,completed);
	}

	Controller.prototype.getDataModel=()=>{model}

window.app= window.app || {}
window.app.Controller = Controller;
})(window);
