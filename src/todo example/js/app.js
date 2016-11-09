(function(window){
	function App(){
		this.store = new window.app.LocalStorage('todoApp');
		this.model = new window.app.Model(this.store);
		this.view  = new window.app.View();
		this.controller = new window.app.Controller(this.model,this.view);
	}
	var app = new App();

})(window);
