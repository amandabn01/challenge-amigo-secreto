let amigos = [];
let nomeSorteado = [];

function adicionarAmigo(){
    let inserirNome = document.getElementById('amigo');
    let nome = inserirNome.value.trim();

    if(nome){
        amigos.push(nome);
        inserirNome.value = '';
        atualizarLista();

        document.getElementById('resultado').innerHTML="";
        nomeSorteado=[];
    } else{
        alert('Por favor, insira um nome para iniciar!')
    }
}

function atualizarLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo(){
    if (amigos.length === 0){
        alert('Digite alguns nomes antes de sortear!');
        return;
    }     
    let nomeSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById('resultado').innerHTML = `<strong>Seu amigo secreto é ${nomeSorteado}!</strong>`;

    amigos = [];
    atualizarLista();
}