
(function (window){
/*Controller object responsible for mapping changes from view to
model and vise versa. Controller object contains methods (actions)
which will fire correspondin to interactions of user with the view*/

	function Controller(model,view){
		this.model = model;
		this.view = view;
		this.view.renderInputField.call(view,this,this.taskSubmitAction);
		this.view.renderView.call(view,this,this.taskCompletionAction);
		this.view.renderFilterButtons.call(view,this,this.filterAction);
	}

	Controller.prototype.addTask = (task,completionDate)=>{
		model.addTask(task,completionDate);
	}

	Controller.prototype.removeTask=(taskId,completed)=>{
		model.removeTask(taskId,completed);
	}

	Controller.prototype.getDataModel=()=>{model}

/*
This action fires to submission of new to do task
*/
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

/*
This action fires when user mark a task as completed
*/
	Controller.prototype.taskCompletionAction=function(ctx,id){
		return function(e){
			e.preventDefault();
			ctx.model.editTask(id,null,null,true);
			ctx.view.renderView(ctx,ctx.taskSubmitAction,ctx.taskCompletionAction);
		}
	}

	Controller.prototype.filterAction= function(ctx,completed){
		if(completed){
			return function(e){
				e.preventDefault();
				ctx.view.renderFilteredView(ctx,ctx.model.getCompleted.call(ctx.model),true);
			}
		}else if(completed==undefined){
			ctx.view.renderView(ctx,ctx.taskSubmitAction,ctx.taskCompletionAction);
		}else{
			return function(e){
				e.preventDefault();
				ctx.view.renderFilteredView(ctx,ctx.model.getActive.call(ctx.model),false,ctx.taskCompletionAction);
			}
		}
	}

	window.app= window.app || {}
	window.app.Controller = Controller;
})(window);
