

var botaoCript = document.querySelector("#btn-cripto");

botaoCript.addEventListener("click",function(event){
	event.preventDefault();
	var texto = document.querySelector("#input-texto");
	var valor =texto.value;
	var textoNovo = valor;

	textoNovo = textoNovo.replace(/e/gi, "enter");
	textoNovo = textoNovo.replace(/i/gi, "imes");
	textoNovo = textoNovo.replace(/a/gi, "ai");
	textoNovo = textoNovo.replace(/o/gi, "ober");
	textoNovo = textoNovo.replace(/u/gi, "ufat");

	console.log(textoNovo)
	var textoModificado = document.querySelector("#msg");
	textoModificado.value = textoNovo;
	valida();


});

var botaoDescript = document.querySelector("#btn-descripto");

botaoDescript.addEventListener("click", function(event){
	event.preventDefault();
	var caixa = document.querySelector("#input-texto").value;
	var mensagem = caixa;

	mensagem = mensagem.replace(/enter/gi, "e");
	mensagem = mensagem.replace(/imes/gi, "i");
	mensagem = mensagem.replace(/ai/gi, "a");
	mensagem = mensagem.replace(/ober/gi, "o");
	mensagem = mensagem.replace(/ufat/gi, "u");

	console.log(mensagem);
	var textoDescripto = document.querySelector("#msg");
	textoDescripto.value = mensagem;
})

var botaoCopiar = document.querySelector("#btn-copy");

botaoCopiar.addEventListener("click", function(event){
  	var text = document.querySelector("#msg")
	navigator.clipboard.writeText(text.value);
	text.value = "";
});
var span = document.querySelector("#erro");

function valida(){
	var mensagem = document.querySelector("#input-texto").value;
	for(letra of mensagem){
		if(!isNaN(mensagem)){
			span.classList.remove("invisivel");
			document.querySelector("#msg").value = "";
			return;
		}

		letrasPermitidas="abcdefghijklmnopqrstuvwxyz "
		var ok = false;
		for(letra2 of letrasPermitidas){
			if(letra==letra2){
				ok = true;
			}
		}
		if(!ok){
			span.classList.remove("invisivel")
			document.querySelector("#msg").value= "";
			return;
		}
	}
}


