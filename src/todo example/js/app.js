(function(window){
	/*
		App object contains all the objects responsible
		for MVC pattern. This App object initiates the app
	*/
	function App(){
		this.store = new window.app.LocalStorage('todoApp');
		this.model = new window.app.Model(this.store.storage);
		this.view  = new window.app.View();
		this.controller = new window.app.Controller(this.model,this.view);
	}
	var app = new App();
	window.onbeforeunload=app.store.cleanup.call(app.store,app.model)

})(window);
