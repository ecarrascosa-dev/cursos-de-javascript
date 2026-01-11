const musicasArray = ['teste', 'agosto'];

const qntMusicas = document.querySelector('#qntMusicas');
const tempMusicas = document.querySelector('#tempMusicas');

const btnAdm = document.querySelector('#btn-adm');
const addMusica = document.querySelector('#add-musica');
const closeMusic = document.querySelector('#closeMusic');
const enviarMusica = document.querySelector('#enviarMusica');

const listaMusica = document.querySelector('#lista-musica');

const enviadoSucesso = document.querySelector('#enviadoSucesso');
const mudanca = document.querySelector('#mudanca');
const falhaRepetida = document.querySelector('#falhaRepetida');
const falha = document.querySelector('#falha');

const ordemAlfabetica = document.querySelector('#ordemAlfabetica');
const inverterPlaylist = document.querySelector('#inverterPlaylist');
const removeThis = document.querySelector('#removerEssaMusica');
const removeLast = document.querySelector('#removeLast');
const removeFirst = document.querySelector('#removeFirst');

qntMusicas.textContent = musicasArray.length;
tempMusicas.textContent = musicasArray.length * 5;
musicaAtual.textContent = musicasArray[0];

btnAdm.addEventListener('click', () => addMusica.style.display = 'flex');

closeMusic.addEventListener('click', () => {
    addMusica.style.display = 'none'
    enviadoSucesso.style.display = 'none';
    falhaRepetida.style.display = 'none';
    falha.style.display = 'none';
});


for(musicaArray of musicasArray) {
    const novaMusica = document.createElement('li');
    novaMusica.textContent = musicaArray;
    listaMusica.appendChild(novaMusica);
}


function adicionarMusica() {
    enviadoSucesso.style.display = 'none';
    falhaRepetida.style.display = 'none';
    falha.style.display = 'none';
    mudanca.style.display = 'none';

    const musica = document.querySelector('#nome').value;
    if(!musica) {
        falha.style.display = 'block';
    } else {
        for(musicaArray of musicasArray) {
            if(musicaArray == musica) {
                return falhaRepetida.style.display = 'block';
            }
        }
        musicasArray.push(musica);
        const novaMusica = document.createElement('li');
        novaMusica.innerHTML = `${musica} <button onclick="removerEssaMusica(this, '${musica}')" style="color: red;">X</button>`
        listaMusica.appendChild(novaMusica);
        enviadoSucesso.style.display = 'block';
        qntMusicas.textContent = musicasArray.length;
        tempMusicas.textContent = musicasArray.length * 5;
        musicaAtual.textContent = musicasArray[0];
    }
    
}

function removerUltimaMusica() {   
    musicasArray.pop();
    
    const ultimoLi = listaMusica.lastElementChild;
    if(ultimoLi) {
        listaMusica.removeChild(ultimoLi);
    }
    mudanca.style.display = 'block';
    qntMusicas.textContent = musicasArray.length;
    tempMusicas.textContent = musicasArray.length * 5;
    musicaAtual.textContent = musicasArray[0];
}

function removerPrimeiraMusica() {   
    musicasArray.shift();
    
    const primeiroLi = listaMusica.firstElementChild;
    if(primeiroLi) {
        listaMusica.removeChild(primeiroLi);
    }
    mudanca.style.display = 'block';
    qntMusicas.textContent = musicasArray.length;
    tempMusicas.textContent = musicasArray.length * 5;
    musicaAtual.textContent = musicasArray[0];
}

function removerEssaMusica(elemento, musica) {
    if(musicasArray.includes(musica)) {
        let indiceDaMusica = musicasArray.indexOf(musica);
        musicasArray.splice(indiceDaMusica, 1);

        const li = elemento.parentElement;
        li.remove();
    } else {
        falha.style.display = 'block';
    }
    mudanca.style.display = 'block';
    musicaAtual.textContent = musicasArray[0];
}

function inverterP() {
    listaMusica.innerHTML = '';
    musicasArray.reverse();
    for(musicaArray of musicasArray) {
        const novaMusica = document.createElement('li');
        novaMusica.innerHTML = `${musicaArray} <button onclick="removerEssaMusica(this, '${musicaArray}')" style="color: red;">X</button>`
        listaMusica.appendChild(novaMusica);
    }
    
    mudanca.style.display = 'block';
    musicaAtual.textContent = musicasArray[0];
}

function ordemA() {
    listaMusica.innerHTML = '';
    musicasArray.sort();
    for(musicaArray of musicasArray) {
        const novaMusica = document.createElement('li');
        novaMusica.innerHTML = `${musicaArray} <button onclick="removerEssaMusica(this, '${musicaArray}')" style="color: red;">X</button>`
        listaMusica.appendChild(novaMusica);

    }
    musicaAtual.textContent = musicasArray[0];
    mudanca.style.display = 'block';
}

ordemAlfabetica.addEventListener('click', () => ordemA());
inverterPlaylist.addEventListener('click', () => inverterP());
removeFirst.addEventListener('click', () => removerPrimeiraMusica());
removeLast.addEventListener('click', () => removerUltimaMusica());
enviarMusica.addEventListener('click', () => adicionarMusica());
