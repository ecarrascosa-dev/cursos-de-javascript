const vendas = [
  { produto: 'Mouse', categoria: 'Periférico', valor: 100, quantidade: 3 },
  { produto: 'Teclado', categoria: 'Periférico', valor: 200, quantidade: 2 },
  { produto: 'Monitor', categoria: 'Tela', valor: 900, quantidade: 1 },
  { produto: 'Cabo HDMI', categoria: 'Acessório', valor: 50, quantidade: 5 },
  { produto: 'Notebook', categoria: 'Computador', valor: 3500, quantidade: 1 }
];

const faturamento = document.querySelector('#faturamento');
const itens = document.querySelector('#itens');
const produtos = document.querySelector('#produtos');



const faturamentoCalculo = vendas.reduce((acumulador, produto) => {
  acumulador.faturamentoTotal += produto.valor * produto.quantidade;
  acumulador.totalItens = vendas.length;
  acumulador.totalProdutos += produto.quantidade

  return acumulador;
}, {faturamentoTotal: 0, totalItens: 0, totalProdutos: 0});

const tabelaVendas = document.querySelector('#tabelaVendas');

function criarCelula(texto) {
  const td = document.createElement('td');
  td.textContent = texto;
  return td;

}

function renderizar(lista) {
  tabelaVendas.innerHTML = '';

  faturamento.innerHTML = faturamentoCalculo.faturamentoTotal;
  itens.innerHTML = faturamentoCalculo.totalItens;
  produtos.innerHTML = faturamentoCalculo.totalProdutos;

  lista.forEach(item => {
    const tr = document.createElement('tr');

    tr.append(
      criarCelula(item.produto),
      criarCelula(item.categoria ?? '-'),
      criarCelula(item.quantidade ?? '-'),
      criarCelula(item.total ?? item.valor * item.quantidade)
    );

    tabelaVendas.appendChild(tr);
  });
}


const btnCaros = document.querySelector('#btnCaros')
btnCaros.addEventListener('click', () => {
  const itensCaros = vendas.filter(venda => venda.valor >= 500);
  renderizar(itensCaros);
});

const filtroCategoria = document.querySelector('#filtroCategoria');
filtroCategoria.addEventListener('click', () => {
  if(filtroCategoria.value == 'todos') {
    renderizar(vendas);
  } else {
    const filtro = vendas.filter(produto => produto.categoria == filtroCategoria.value);
    renderizar(filtro);
  }  
});

const btnResumo = document.querySelector('#btnResumo')
btnResumo.addEventListener('click', () => {
  const resumo = vendas.map(produto => {
  return {
    produto: produto.produto,
    categoria: '—',
    quantidade: '—',
    total: produto.valor * produto.quantidade
  };
});
  renderizar(resumo);
});

const btnReset = document.querySelector('#btnReset');
btnReset.addEventListener('click', () => renderizar(vendas));





renderizar(vendas);