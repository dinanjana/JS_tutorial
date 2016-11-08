(function(window){
	/*
		currently view object is assigned with rendering the view
	*/
	function View (){

	}
	View.prototype.addNewTask=(task,completionDate)=>{

	}

	View.prototype.createView=(model)=>{
		let elem1=document.createElement('ul');
		model.taskList.forEach((task)=>{
			let elem2=document.createElement('li');
			let text=document.createTextNode('<button type="button">'+this.task+
			'. Added on '+this.addedDay+'. should complete on or before '+ this.completionDay+'<button\>');
			elem1.appendChild(elem2.appendChild(text));
		});
		let elem =document.createElement('div');
		return elem.appendChild(elem1);
	}

	View.prototype.createTaskTextField=()=>{
		let tex_elem = document.createElement('input');
		tex_elem.setAttribute('input','text');
		tex_elem.setAttribute('name','task');
		let date_elem = document.createElement('input');
		date_elem.setAttribute("type","date");
		date_elem.setAttribute('name','completionDate');
		let submit_elem = document.createElement('button');
		submit_elem.innerHTML="Add task";
		let form_elem=document.createElement('form');
		form_elem.appendChild(tex_elem);
		form_elem.appendChild(date_elem);
		form_elem.appendChild(submit_elem);
		return form_elem;
	}

	View.prototype.renderView =(view)=>{
		document.getElementById('container').appendChild(view);
	}
	window.app = window.app || {};
	window.app.View=View;

})(window);
