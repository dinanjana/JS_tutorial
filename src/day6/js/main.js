function createView(){
	//This is te best and cleaner way to assign
	//methods to a prototype as told in mdn
	function Body(){
		this.allTasks=0;
		this.remainingTasks=0;
		this.taskList=[];
	}

	(function (){
		this.addTask=function (task){
			++this.allTasks;
			this.taskList.push(task);
		}

		this.completeTask=function(task){
			--this.remainingTasks;
		}

		this.showTasks=function(){
			// let ret='';
			// this.taskList.forEach((task)=>{
			// 	ret=ret+task.createTask()+'<br>';
			// })
			// return ret;
			return this.taskList;
		}

	}).call(Body.prototype);

	//Function constructor of a single task.
	//A task represents single line item in the to do list
	function Task(task,priority,completionDay){
		this.task=task;
		this.completionDay=completionDay;
		this.addedDay=new Date();
		switch(priority){
			case 1:
				this.priority='CRITICAL';
				break;
			case 2:
				this.priority='MEDIUM';
				break;
			case 3:
				this.priority='NORMAL';
				break;
			default:
				this.priority='NORMAL';
				break;
		}
		this.taskStaus='OPEN';
	}
	Task.prototype.createTask=()=>{
		let elem = document.createElement('button');
		let text=document.createTextNode('<button type="button">'+this.task+ 
		'. Added on '+this.addedDay+'. should complete on or before '+ this.completionDay+'<button\>')
		elem.appendChild(text);
		return elem;
	}	

	var body = new Body();
	var task = new Task("Complete js assignment",1,new Date());
	body.addTask(task);
	return body.showTasks();
}


function renderView(){
	var nodes=createView();
	var parentNode = document.getElementById('container');
	nodes.forEach((task)=>{
		parentNode=parentNode.appendChild(task.createTask());
	});
	//document.insertBefore(createView(),);
}
