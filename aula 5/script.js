const btnCriar = document.querySelector("#btnCriar");
const inputUsuario = document.querySelector("#inputUsuario");
const listaFilmes = document.querySelector("#listaFilmes");

btnCriar.addEventListener("click", function (infosDoEvento){
    infosDoEvento.preventDefault();
    
    const novoFilme = document.createElement("li");
    novoFilme.innerText = inputUsuario.value;

    const btnEditar = document.createElement("button");
    btnEditar.innerText = "Editar";
    btnEditar.addEventListener("click", function (){
        novoFilme.style.color = "red"
        novoFilme.classList.toggle("fundo-preto")
    })

    const imagem = document.createElement("img")
    imagem.src=""

    novoFilme.append(btnEditar)
    listaFilmes.append(novoFilme);

    inputUsuario.value = ""
    
})