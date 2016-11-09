(function(window){
	/*
		currently view object is assigned with rendering the view
	*/
	function View (){

	}
/*
	This method generates view of the to do list
*/
	View.prototype.renderView =function(controller,fn1,fn2){
		var container = document.getElementById('container');
		while (container.firstChild) {
	    container.removeChild(container.firstChild);
		}
		container.appendChild(this.createTaskTextField(controller,fn1));
		container.appendChild(this.createView(controller,fn2));
	}

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
	}

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
	}

	View.prototype.renderFilterButtons=function(fn1,fn2,fn3){
			let filter = document.getElementById('filter');
			let all = document.createElement('button');
			all.innerHTML='All';
			all.onclick=fn1;
			filter.appendChild(all);
			let completed = document.createElement('button');
			completed.onclick=fn2;
			completed.innerHTML='Show completed';
			filter.appendChild(completed);
			let notCompleted = document.createElement('button');
			notCompleted.onclick=fn3;
			notCompleted.innerHTML='Show active';
			filter.appendChild(notCompleted);
	}

	window.app = window.app || {};
	window.app.View=View;

})(window);
