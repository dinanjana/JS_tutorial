
(function (window){
/*Controller object responsible for mapping changes from view to
model and vise versa. Controller object contains methods (actions)
which will fire correspondin to interactions of user with the view*/

	function Controller(model,view){
		this.model = model;
		this.view = view;
		this.view.renderView.call(view,this,this.taskSubmitAction,this.taskCompletionAction);
		this.view.renderFilterButtons.call(view,()=>{},()=>{},()=>{});
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

	Controller.prototype.filterAction= function(ctx,type){
		let fn;
		switch(type){
			case 1:
				fn =function(e){
							ctx.model.taskList.forEach((task)=>{
								
							})
						};
		}

	}

	window.app= window.app || {}
	window.app.Controller = Controller;
})(window);
