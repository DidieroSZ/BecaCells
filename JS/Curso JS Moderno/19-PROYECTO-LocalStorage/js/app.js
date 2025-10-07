const formulario = document.querySelector('#formulario');
const listado = document.querySelector('#lista-tweets');

let tweets = [];


evenListeners();

function evenListeners(){
    formulario.addEventListener('submit', agregarTweet);

    document.addEventListener('DOMContentLoaded', obtenerLocal);
}

function obtenerLocal(){
    tweets = JSON.parse(localStorage.getItem('tweets')) || [];
    createHTML();
}

function agregarTweet(e){
    e.preventDefault();

    const tweet = document.querySelector('#tweet').value;
    if (tweet !== '') {
        addTweet(tweet);
        createHTML();
    }
}

function addTweet(valor){
     const tweetOBJ = {
        id: Date.now(),
        texto: valor
    }
    tweets = [...tweets, tweetOBJ];
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function deleteTweet(id){
    tweets = tweets.filter(t => t.id !== id);
    localStorage.setItem('tweets', JSON.stringify(tweets));
    obtenerLocal();
}

function createHTML(){
    limpiarHTML();
    if (tweets.length > 0) {
        tweets.forEach( t => {
            const btn = document.createElement('a');
            btn.classList.add('borrar-tweet');
            btn.innerText = 'x';

            btn.onclick = () => {
                deleteTweet(t.id);
            }

            const li = document.createElement('li');
            li.innerText = t.texto;
            li.appendChild(btn);
            listado.appendChild(li);
        });
    }
}

function limpiarHTML(){
    listado.innerHTML = '';
    const valor = document.querySelector('#tweet');
    valor.value = '';
    console.log('limpiando');
}