const catalogo = [
  { titulo: 'Interestelar', genero: 'Ficção', duracao: 169, nota: 9, assistido: true },
  { titulo: 'Parasita', genero: 'Suspense', duracao: 132, nota: 8.6, assistido: false },
  { titulo: 'Toy Story', genero: 'Animação', duracao: 81, nota: 8.3, assistido: true },
  { titulo: 'O Poderoso Chefão', genero: 'Drama', duracao: 175, nota: 9.2, assistido: false },
  { titulo: 'Vingadores', genero: 'Ação', duracao: 143, nota: 8, assistido: true }
];

const logOperacional = catalogo.forEach(filme => {
  console.log(`🎬 ${filme.titulo} — ${filme.assistido ? 'Assistido' : 'Não assistido'}`)
});


const filmesRecomendados = catalogo.filter(filme => filme.nota >= 8.5 && filme.duracao >= 120)
  .map(filme => {return {titulo: filme.titulo, recomendado: filme.assistido,}});
console.log(filmesRecomendados);

//nesse aqui você fala que não pode usar o filter antes, mas seria ideal usar?
const tempoTotal = catalogo.reduce((ac, filme) => {
  if(filme.assistido == false) {
    ac += filme.duracao;
  }
  return ac;
}, 0);
console.log(tempoTotal);

const sttsCatalogo = catalogo.reduce((ac, filme) => {
  if(filme.assistido == true) {
    ac.assistidos++;
  } else {
    ac.naoAssistidos++;
  }
  ac.notaMedia = ac.notaMedia + filme.nota / catalogo.length;
  return ac
}, {
  totalFilmes: catalogo.length,
  assistidos: 0,
  naoAssistidos: 0,
  notaMedia: 0,
});
console.log(sttsCatalogo);

const pipeline = catalogo.filter(filme => filme.assistido == true && filme.nota >= 8)
  .map(filme => filme.titulo.toUpperCase());
console.log(pipeline);