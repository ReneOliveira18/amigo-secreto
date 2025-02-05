let amigos = [];

function adicionarAmigo() {
  const amigo = document.getElementById("amigo").value;

  if (amigo.trim() === "") { //Remove espaços em branco antes e depois do nome digitado.
    alert("Por favor, insira um nome válido.");
    return;
  }
  if (!/^[a-zA-Z\u00C0-\u00FF ]+$/.test(amigo)) { //Expressão regular para validar se o nome contém apenas letras e espaços
    alert("Por favor, insira apenas letras no nome.");
    return;
  }

  amigos.push(amigo);
  atualizarListaAmigos();
  document.getElementById("amigo").value = ""; // Limpa o campo de texto
}

function atualizarListaAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = ""; // Limpa a lista antes de adicionar os novos nomes

  for (const amigo of amigos) {
    const itemLista = document.createElement("li");//Cria um <li> para cada nome
    itemLista.textContent = amigo;
    listaAmigos.appendChild(itemLista);//Adiciona cada <li> dentro da listaAmigos
  }
}
//Verifica se existe ao menos dois amigos para o sorteio
function sortearAmigo() {
  if (amigos.length < 2) {
    alert("É necessário ter pelo menos dois amigos na lista para realizar o sorteio.");
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * amigos.length);//Gera sorteio aleatório
  const amigoSorteado = amigos.splice(indiceSorteado, 1)[0];//Remove e retorna nome sorteado
  //Exibe nome sorteado e após o sorteio zera e limpa a lista
  document.getElementById("resultado").textContent = `O amigo secreto sorteado é: ${amigoSorteado}!`;
  
  atualizarListaAmigos();//Atualiza lista na tela
}