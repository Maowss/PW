var postit;

var btnAdicionar = document.querySelector("#botao");
btnAdicionar.addEventListener("click", function(event){
	event.preventDefault();

	var card = document.createElement("div");
	card.classList.add("card");

	var cor = document.querySelector("#cor").value;
	
	var tarefa = document.querySelector("#tarefa").value; 
	var paragrafo = document.createElement("p");
//________________________________________________________________________________	

var btnApagar = criarBotao("btn-danger", "fa-trash-alt");
	btnApagar.addEventListener("click", apagarTarefa);
	btnApagar.classList.add("btn-apagar");
	

var botoes= document.createElement("div");
	botoes.classList.add("botoes");
	botoes.classList.add("oculto");

	botoes.appendChild(btnApagar);
	card.appendChild(botoes);


var btnApagar = document.querySelectorAll(".btn-apagar");
	btnApagar.forEach(function(botao){
	botao.addEventListener("click", apagarTarefa);

});

function criarBotao(cor, icone){
	var icon	= document.createElement("i");
	var btn = document.createElement("button");
	btn.appendChild(icon);
	btn.classList.add("btn", cor);
	icon.classList.add("fas", icone);
	return btn;
}

function apagarTarefa(event){
	var postit;
		if(event.target.hasChildNodes()) {
			postit = event.target.parentNode.parentNode;
		} else {
			postit = event.target.parentNode.parentNode.parentNode;
		}
		postit.classList.add("fade-out");
		
		setTimeout(function(){
			postit.remove();
		}, 100);
}


//________________________________________________________________________________

	paragrafo.textContent = (tarefa);
	paragrafo.classList.add("conteudo");

	card.style.background = cor;	
	card.appendChild(paragrafo);
	body.appendChild(card);

	if (cor == "#000000") {

		paragrafo.classList.remove("conteudo");
		paragrafo.classList.add("conteudo2");
	}

//_________________________________________________________________________________

card.addEventListener("mouseover", function(event){

	var cardSelect = event.target;
	var btnSelectA = card.querySelector(".oculto"); //A == apagar
	
		btnSelectA.classList.remove("oculto");
	
	var resett = event.target;
	resett.addEventListener("mouseout", function(){
		
		btnSelectA.classList.add("oculto");
		});

	});

});


