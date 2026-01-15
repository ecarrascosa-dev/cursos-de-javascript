const despesas = [
  { descricao: 'Aluguel', categoria: 'Moradia', valor: 1200, fixa: true },
  { descricao: 'Mercado', categoria: 'Alimentação', valor: 450, fixa: false },
  { descricao: 'Internet', categoria: 'Serviços', valor: 120, fixa: true },
  { descricao: 'Academia', categoria: 'Saúde', valor: 90, fixa: true },
  { descricao: 'Uber', categoria: 'Transporte', valor: 60, fixa: false },
  { descricao: 'Streaming', categoria: 'Lazer', valor: 55, fixa: true },
  { descricao: 'Streaming', categoria: 'Lazer', valor: 1, fixa: true },
];

const tabelaDespesas = document.querySelector('#tabelaDespesas');

const totalGastoValor = document.querySelector('#totalGasto');
const mediaGastoValor = document.querySelector('#mediaGasto');
const fixasValor = document.querySelector('#fixas');
const variaveisValor = document.querySelector('#variaveis') ;

function calcularResumo(despesas) {
    return despesas.reduce((acumulador, despesa) => {
    acumulador.totalGasto += despesa.valor;
    acumulador.media = acumulador.totalGasto / despesas.length;
    if(despesa.fixa == true) {
        acumulador.fixas++;
    } else {
        acumulador.variaveis++;
    };

    return acumulador;
}, {totalGasto: 0, media: 0, fixas: 0, variaveis: 0,});
}


function criarCelula(texto) {
    const td = document.createElement('td');
    td.textContent = texto;
    return td;
}

function renderizarTabela(lista) {
    tabelaDespesas.innerHTML = '';

    const resumo = calcularResumo(lista)

    totalGastoValor.innerHTML = resumo.totalGasto;
    mediaGastoValor.innerHTML = resumo.media.toFixed(2);
    fixasValor.innerHTML = resumo.fixas;
    variaveisValor.innerHTML = resumo.variaveis;


    lista.forEach(despesa => {
        const tr = document.createElement('tr');

        tr.append(
            criarCelula(despesa.descricao),
            criarCelula(despesa.categoria),
            criarCelula(despesa.valor),
            criarCelula(despesa.fixa ? 'Fixo' : 'Não Fixo'),
        );

        tabelaDespesas.appendChild(tr);
    });
}

const btnFixas = document.querySelector("#btnFixas");
btnFixas.addEventListener('click', () => {
    const despesasFixas = despesas.filter(despesa => despesa.fixa == true);
    renderizarTabela(despesasFixas);
})

const btnAltas = document.querySelector("#btnAltas");
btnAltas.addEventListener('click', () => {
    const despesasAltas = despesas.filter(despesa => despesa.valor >= 100);
    renderizarTabela(despesasAltas);
})

renderizarTabela(despesas)