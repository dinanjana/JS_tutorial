
(function (window){

	function Controller(model,view){
		this.model = model;
		this.view = view;
		this.view.renderView.call(view,this,this.taskSubmitAction,this.taskCompletionAction);
	}

	Controller.prototype.addTask = (task,completionDate)=>{
		model.addTask(task,completionDate);
	}

	Controller.prototype.removeTask=(taskId,completed)=>{
		model.removeTask(taskId,completed);
	}

	Controller.prototype.getDataModel=()=>{model}

	Controller.prototype.taskSubmitAction=function(ctx){
		return function(e){
			e.preventDefault();
			let task_form=document.getElementById('task_field');
				if(task_form){
					let task=task_form.childNodes[0].value;
					let completionDate=task_form.childNodes[1].value;
					ctx.model.addTask.call(ctx.model,task,completionDate);
					ctx.view.renderView(ctx,ctx.taskSubmitAction,ctx.taskCompletionAction);
			}
		}
	}

	Controller.prototype.taskCompletionAction=function(ctx,id){
		return function(e){
			e.preventDefault();
			ctx.model.editTask(id,null,null,true);
			ctx.view.renderView(ctx,ctx.taskSubmitAction,ctx.taskCompletionAction);
		}
	}

	window.app= window.app || {}
	window.app.Controller = Controller;
})(window);
