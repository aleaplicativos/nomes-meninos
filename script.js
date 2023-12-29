const dicas = [
"Alencar",
"Alfredo",
"Miguel",
"Arthur",
"Ariel",
"André",
"Afonso",
"Aleixo",
"Adriano",
"Alexandre",
"Antônio",
"Augusto",
"Abelardo",
"Américo",
"Aurelino",
"Ari",
"Arno",
"Adonis",
"Alisson",
"Alceu",
"Alessandro",
"Adalberto",
"Anselmo",
"Ademir",
"Agostinho",
"Aldair",
"Amilton",
"Ariston",
"Amaro",
"Abner",
"Aparecido",
"Aureliano",
"Arnaldo",
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
  
