var paciente = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){

	event.target.parentNode.classList.add("fadeOut");
	setTimeout(function(){
		event.target.parentNode.remove();
	},300);
 

});

//pacientes.forEach(function (paciente) {
//	paciente.addEventListener("dblclick", function(){
//		console.log("Fui clicado com um duplo clique");
//		this.remove();
//	})
//});
