const dicas = [
"Alencar",
"Alfredo",
"Miguel",
"Arthur",
"Gael",
"Heitor",
"Theo",
"Davi",
"Gabriel",
"Bernardo",
"Samuel",
"João Miguel",	
  ];
  
  function gerarDica() {
	const indiceAleatorio = Math.floor(Math.random() * dicas.length);
	const dica = dicas[indiceAleatorio];
	document.getElementById("dica").innerHTML = dica;
  }
  
  document.getElementById("botao").addEventListener("click", gerarDica);
  