const catalogo = [
  { titulo: 'Interestelar', genero: 'Ficção', duracao: 169, nota: 9, assistido: true },
  { titulo: 'Parasita', genero: 'Suspense', duracao: 132, nota: 8.6, assistido: false },
  { titulo: 'Toy Story', genero: 'Animação', duracao: 81, nota: 8.3, assistido: true },
  { titulo: 'O Poderoso Chefão', genero: 'Drama', duracao: 175, nota: 9.2, assistido: false },
  { titulo: 'Vingadores', genero: 'Ação', duracao: 143, nota: 8, assistido: true },
  { titulo: 'Homem-Aranha', genero: 'Ação', duracao: 143, nota: 8, assistido: true }
];


const tabelaFilmes = document.querySelector('#tabelaFilmes');
function criarCelula(texto) {
  const td = document.createElement('td');
  td.textContent = texto;
  return td;
}

const totalFilmes = document.querySelector('#totalFilmes');
const tempoTotal = document.querySelector('#tempoTotal');
const notaMedia = document.querySelector('#notaMedia');

function calcularResumo(catalogo) {
  return catalogo.reduce((ac, filme) => {
  ac.totalFilme = catalogo.length;
  ac.tempoTotal += filme.duracao;
  ac.notaMedia = ac.notaMedia + (filme.nota / catalogo.length);

  return ac;
}, {totalFilme: 0, tempoTotal: 0, notaMedia: 0,});
}



function renderizarTabela(catalogo) {
    tabelaFilmes.textContent = ''

    const resumo = calcularResumo(catalogo);

    totalFilmes.innerHTML = resumo.totalFilme;
    tempoTotal.innerHTML = resumo.tempoTotal;
    notaMedia.innerHTML = resumo.notaMedia.toFixed(2);


    catalogo.forEach(filme => {
      const tr = document.createElement('tr');

      tr.append(
        criarCelula(filme.titulo),
        criarCelula(filme.genero),
        criarCelula(filme.duracao),
        criarCelula(filme.nota),
        criarCelula(filme.assistido ? 'Assistido' : 'Não assistido')
      );

      tabelaFilmes.appendChild(tr)
    });

    calcularResumo(catalogo);
}



const btnRecomendados = document.querySelector('#btnRecomendados');
btnRecomendados.addEventListener('click', function() {
  const recomendados = catalogo.filter(filme => filme.nota >= 8.5);

  renderizarTabela(recomendados);
});

const btnAssistidos = document.querySelector('#btnAssistidos');
btnAssistidos.addEventListener('click', function() {
  const assistidos = catalogo.filter(filme => filme.assistido == true);

  renderizarTabela(assistidos);
});

const filtroGenero = document.querySelector('#filtroGenero');
filtroGenero.addEventListener('change', function() {
  const genero = catalogo.filter(filme => filme.genero == filtroGenero.value);
  if(filtroGenero.value == 'todos') {
    renderizarTabela(catalogo);
  } else {
    renderizarTabela(genero);
  }
})

const btnReset = document.querySelector('#btnReset');
btnReset.addEventListener('click', function() {
  renderizarTabela(catalogo);
})


renderizarTabela(catalogo);