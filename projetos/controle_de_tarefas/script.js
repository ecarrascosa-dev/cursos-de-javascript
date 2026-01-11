const tarefas = ['Responder e-mails', 'Atualizar sistema', 'Reunião diária', 'Revisar relatórios'];

const addTarefa = document.querySelector('#addTarefa').addEventListener('click', () => adicionarTarefa());
const removePrimeiraTarefa = document.querySelector('#removePrimeiraTarefa').addEventListener('click', () => removerPrimeiraTarefa());
const removeUltimaTarefa = document.querySelector('#removeUltimaTarefa').addEventListener('click', () => removerUltimaTarefa());
const invertOrdem = document.querySelector('#invertOrdem').addEventListener('click', () => inverterOrdem());
const organizeAZ = document.querySelector('#organizeAZ').addEventListener('click', () => organizarAZ());

const listaUl = document.querySelector('#listaDeTarefas');

const msgErro = document.querySelector('#msg-erro');
const msgSucesso = document.querySelector('#msg-sucesso');

function exibirTarefas(tarefas) {
    const totalTarefas = document.querySelector('#totalTarefas');
    const tarefaAtual = document.querySelector('#tarefaAtual')
    
    msgErro.style.display = 'none';
    msgSucesso.style.display = 'none';
    listaUl.innerHTML = ''

    for(let i = 0; i < tarefas.length; i++) {
        
        const li = document.createElement('li');
    
        li.innerHTML = `
        <span>${[i + 1]}. ${tarefas[i]}</span>
        <button>X</button>`;
        listaUl.appendChild(li);
    }

    totalTarefas.textContent = tarefas.length;
    tarefaAtual.textContent = tarefas[0];
}

function adicionarTarefa() {
    
    const tarefa = document.querySelector('#tarefa').value;
    for(tarefa1 of tarefas) {
        if(tarefa == tarefa1 || !tarefa) {
            msgErro.style.display = 'block'
            return msgSucesso.style.display = 'none';
        }
    }
    tarefas.push(tarefa)
    exibirTarefas(tarefas);
    msgSucesso.style.display = 'block';

}

function removerPrimeiraTarefa() {
    tarefas.shift();
    exibirTarefas(tarefas);
}

function removerUltimaTarefa() {
    tarefas.pop();
    exibirTarefas(tarefas);
}

function inverterOrdem() {
    tarefas.reverse();
    exibirTarefas(tarefas);
}

function organizarAZ() {
    tarefas.sort();
    exibirTarefas(tarefas);
}

exibirTarefas(tarefas);