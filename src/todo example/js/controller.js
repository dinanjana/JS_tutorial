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

var taskSubmitAction=function(ctx){
	return function(e){
		let task_form=document.getElementById('task_field');
			if(task_form){
				let task=task_form.childNodes[0].value;
				let completionDate=task_form.childNodes[1].value;
				ctx.model.addTask.call(ctx.model,task,completionDate);
				//createView(ctx.model);
				renderView(ctx.model,ctx);
		}
	}
}
