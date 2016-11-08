(function(window){
	/*
		currently view object is assigned with rendering the view
	*/
	function View (){

	}

	View.prototype.renderView =(view)=>{
		document.getElementById('container').appendChild(view);
	}
	window.app = window.app || {};
	window.app.View=View;

})(window);

	var createView=(model)=>{
		let elem =document.createElement('div');
		let elem1=document.createElement('ul');
		model.taskList.forEach((task)=>{
			let elem2=document.createElement('li');
			let button_elem=document.createElement('button');
			button_elem.innerHTML=task.task+
				'. Added on '+task.addedDay+'. should complete on or before '+
				task.completionDay;
			elem2.appendChild(button_elem);
			elem1.appendChild(elem2);
		});
		return elem.appendChild(elem1);
	}
	var createTaskTextField=function(controller){
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

var renderView=function(model,controller){
	var container = document.getElementById('container');
	while (container.firstChild) {
    container.removeChild(container.firstChild);
}
	container.appendChild(createTaskTextField(controller));
	container.appendChild(createView(model));
}
