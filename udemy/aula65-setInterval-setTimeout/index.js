let contador = 0;

const mostraHora = setInterval(() => {
    const data = new Date();
    console.log(data.toLocaleTimeString('pt-BR', {hour12: false}));

    contador++;

    if(contador === 5) {
        clearInterval(mostraHora);
        console.log('Acabou');
    }
}, 1000)