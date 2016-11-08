(function(window){
	function App(){
		//this.store = new window.app.Storage('todoApp');
		//this.model = new window.app.Model(this.store);
		this.view  = new window.app.View();
		//this.controller = new window.app.Controlle(this.model,this.view);
	}
	var app = new App();
	document.getElementById('container').appendChild(app.view.createTaskTextField());
})(window);
