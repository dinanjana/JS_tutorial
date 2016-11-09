(function(window){
	/*
		currently view object is assigned with rendering the view
	*/
	function View (){

	}

	View.prototype.renderView =function(model,controller,fn1){
		var container = document.getElementById('container');
		while (container.firstChild) {
	    container.removeChild(container.firstChild);
		}
		container.appendChild(this.createTaskTextField(controller,fn1));
		container.appendChild(this.createView(model));
	}

	View.prototype.createView=(model)=>{
		let elem =document.createElement('div');
		let elem1=document.createElement('ul');
		model.taskList.forEach((task)=>{
			let elem2=document.createElement('li');
			let div=document.createElement('div');
			if(!task.completed){
				div.innerHTML=task.task+
					'. Added on '+task.addedDate+'. should complete on or before '+
					task.completionDate;
				div.addEventListener('click',(e)=>{
					//model.
					console.log('task marked as completed');
				});
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

	window.app = window.app || {};
	window.app.View=View;

})(window);
