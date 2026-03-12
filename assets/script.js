//  o campo de texto onde o usuário digita a matéria
const inputMateria = document.getElementById("input-materia");

//  botão "Adicionar"
const botaoAdicionar = document.getElementById("botao-adicionar");

// a lista  onde as matérias serão adicionadas
const listaMaterias = document.getElementById("lista-materias");


botaoAdicionar.addEventListener("click", adicionar);

// função responsável por adicionar uma nova matéria na lista
function adicionar(){

    // texto que o usuário digitou no input
    const texto = inputMateria.value;

    // se o campo estiver vazio, não fazemos nada
    // isso evita adicionar itens vazios na lista
    if(texto === ""){
        return;
    }

    // cria um novo elemento <li> (item da lista)
    const li = document.createElement("li");

    // coloca dentro do <li> o texto que o usuário digitou
    li.textContent = texto;

    // cria um botão que servirá para remover a matéria
    const botaoRemover = document.createElement("button");

    // Definimos o texto do botão
    botaoRemover.textContent = "Remover";

    
    botaoRemover.addEventListener("click", function(){
        li.remove();
    });

    // coloca o botão remover dentro do item da lista
    li.appendChild(botaoRemover);

    // adiciona o item da lista dentro 
    listaMaterias.appendChild(li);

    // limpa o campo de texto para digitar outra matéria
    inputMateria.value = "";
}