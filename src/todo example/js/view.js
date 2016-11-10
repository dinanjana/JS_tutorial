(function(window){
	/*
		currently view object is assigned with rendering the view
	*/
	function View (){

	}
/*
	This method generates view of the to do list
*/
	View.prototype.renderView =function(controller,fn2){
		var container = document.getElementById('container');
		while (container.firstChild) {
			container.removeChild(container.firstChild);
		}
		container.appendChild(this.createView(controller,fn2));
	};

	View.prototype.renderInputField=function(controller,fn1){
		var container = document.getElementById('input');
		while (container.firstChild) {
			container.removeChild(container.firstChild);
		}
		container.appendChild(this.createTaskTextField(controller,fn1));
	};

	View.prototype.renderFilteredView=function(controller,list,completed,fn){
		let elem = document.createElement('div');
		let elem1 = document.createElement('ul');
		if(completed){
			list.forEach((task)=>{
				let elem2=document.createElement('li');
				let div=document.createElement('div');
				let strikethru =document.createElement('strike');
				strikethru.innerHTML=task.task+
					'. Added on '+task.addedDate+'. should complete on or before '+
					task.completionDate;
				div.appendChild(strikethru)
				elem2.appendChild(div);
				elem1.appendChild(elem2);
			});
		}else{
			list.forEach((task)=>{
				let elem2=document.createElement('li');
				let div=document.createElement('div');
				div.innerHTML=task.task+
					'. Added on '+task.addedDate+'. should complete on or before '+
						task.completionDate;
				let fn2=fn(controller,task.taskId);
				div.addEventListener('click',fn2);
				elem2.appendChild(div);
				elem1.appendChild(elem2);
			});
		}
		elem.appendChild(elem1);
		let container=document.getElementById('container');
		while (container.firstChild) {
			container.removeChild(container.firstChild);
		}
		container.appendChild(elem);
	},

	View.prototype.renderTaskInputField=function(controller,fn1){
		var container = document.getElementById('container');
		container.appendChild(this.createTaskTextField(controller,fn1));
	},

	View.prototype.createView=(controller,fn2)=>{
		let elem =document.createElement('div');
		let elem1=document.createElement('ul');
		controller.model.taskList.forEach((task)=>{
			let elem2=document.createElement('li');
			let div=document.createElement('div');
			if(!task.completed){
				div.innerHTML=task.task+
					'. Added on '+task.addedDate+'. should complete on or before '+
					task.completionDate;
				let fn=fn2(controller,task.taskId);
				div.addEventListener('click',fn);
			}else {
				let strikethru =document.createElement('strike');
				strikethru.innerHTML=task.task+
					'. Added on '+task.addedDate+'. should complete on or before '+
					task.completionDate;
					div.appendChild(strikethru);
			}
			elem2.appendChild(div);
			elem1.appendChild(elem2);
		});
		return elem.appendChild(elem1);
	},

	View.prototype.createTaskTextField=function(controller,taskSubmitAction){
		let tex_elem = document.createElement('input');
		tex_elem.setAttribute('input','text');
		tex_elem.setAttribute('name','task');
		let date_elem = document.createElement('input');
		date_elem.setAttribute("type","date");
		date_elem.setAttribute('name','completionDate');
		let submit_elem = document.createElement('button');
		submit_elem.innerHTML="Add task";
		let func =taskSubmitAction(controller)
		submit_elem.addEventListener('click',func);
		let form_elem=document.createElement('div');
		form_elem.appendChild(tex_elem);
		form_elem.appendChild(date_elem);
		form_elem.appendChild(submit_elem);
		form_elem.setAttribute('id','task_field');
		return form_elem;
	},

	View.prototype.renderFilterButtons=function(controller,filterAction){
			let filter = document.getElementById('filter');
			let action;
			let all = document.createElement('button');
			all.onclick=filterAction(controller,undefined);
			all.innerHTML='All';
			filter.appendChild(all);
			let completed = document.createElement('button');
			completed.onclick=filterAction(controller,true);
			completed.innerHTML='Show completed';
			filter.appendChild(completed);
			let notCompleted = document.createElement('button');
			notCompleted.onclick=filterAction(controller,false);
			notCompleted.innerHTML='Show active';
			filter.appendChild(notCompleted);
	},


	window.app = window.app || {};
	window.app.View=View;

})(window);
