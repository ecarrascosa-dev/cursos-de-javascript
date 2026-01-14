const filmes = [
  { titulo: 'Interestelar', genero: 'Ficção', duracao: 169, nota: 9 },
  { titulo: 'O Poderoso Chefão', genero: 'Drama', duracao: 175, nota: 9.2 },
  { titulo: 'Vingadores', genero: 'Ação', duracao: 143, nota: 8 },
  { titulo: 'Parasita', genero: 'Suspense', duracao: 132, nota: 8.6 },
  { titulo: 'Toy Story', genero: 'Animação', duracao: 81, nota: 8.3 }
];

const tabelaFilmes = document.querySelector('#tabela-filmes');
const tempoTotal = document.querySelector('#tempoTotal');
const mediaNotas = document.querySelector('#mediaNotas');

const filmesLongosButton = document.querySelector('#filmesLongosButton')
  .addEventListener('click', () => {
    const filmesLongos = filmes.filter(filme => filme.duracao >= 150);
    renderizarLista(filmesLongos);
});

const filmesAltosButton = document.querySelector('#filmesAltosButton')
  .addEventListener('click', () => {
    const filmesAltos = filmes.filter(filme => filme.nota >= 8.5);
    renderizarLista(filmesAltos);
  })

const totalTempo = filmes.reduce((acumulador, filme) => {
  return acumulador + filme.duracao;
}, 0);
tempoTotal.innerHTML = totalTempo;

const mediaNotasFilme = filmes.reduce((acumulador, filme) => {
  return acumulador + filme.nota;
}, 0);
mediaNotas.innerHTML = mediaNotasFilme / filmes.length;


function renderizarLista(lista) {
  tabelaFilmes.innerHTML = lista.map(filme => `
  <tr>
    <td>${filme.titulo}</td>
    <td>${filme.genero}</td>
    <td>${filme.duracao}</td>
    <td>${filme.nota}</td>
  </tr>
`).join('');
}






renderizarLista(filmes);

