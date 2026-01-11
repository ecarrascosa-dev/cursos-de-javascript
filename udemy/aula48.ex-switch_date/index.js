const relogio = document.querySelector('#relogio');

const d = new Date();
const dia = d.getDate();
const diasSemana = d.getDay();
const diasMes = d.getMonth();
const ano = d.getFullYear();
const hora = d.getHours();
const minutos = d.getMinutes();

function getDayWeek(diasSemana) {
    let semanaTexto;
    switch (diasSemana) {
        case 0:
            semanaTexto = 'Domingo';
            return semanaTexto;
        case 1:
            semanaTexto = 'Segunda';
            return semanaTexto;
        case 2:
            semanaTexto = 'Terça';
            return semanaTexto;
        case 3:
            semanaTexto = 'Quarta';
            return semanaTexto;
        case 4:
            semanaTexto = 'Quinta';
            return semanaTexto;
        case 5:
            semanaTexto = 'Sexta';
            return semanaTexto;
        case 6:
            semanaTexto = 'Sábado';
            return semanaTexto;
        default:
            semanaTexto = '';
            return semanaTexto;
    }
}

function getMounth(diasMes) {
    let mesTexto;
    switch (diasMes) {
        case 0:
            mesTexto = 'Janeiro';
            return mesTexto;
        case 1:
            mesTexto = 'Fevereiro';
            return mesTexto;
        case 2:
            mesTexto = 'Março';
            return mesTexto;
        case 3:
            mesTexto = 'Abril';
            return mesTexto;
        case 4:
            mesTexto = 'Maio';
            return mesTexto;
        case 5:
            mesTexto = 'Junho';
            return mesTexto;
        case 6:
            mesTexto = 'Julho';
            return mesTexto;
        case 7:
            mesTexto = 'Agosto';
            return mesTexto;
        case 8:
            mesTexto = 'Setembro';
            return mesTexto;    
        case 9:
            mesTexto = 'Outubro';
            return mesTexto;
        case 10:
            mesTexto = 'Novembro';
            return mesTexto;
        case 11:
            mesTexto = 'Dezembro';
            return mesTexto;
        default:
            mesTexto = '';
            return mesTexto;
    }
}


const semana = getDayWeek(diasSemana); 
const mes = getMounth(diasMounth);

relogio.innerHTML = `${semana}, ${dia} de ${mes} de ${ano}, ${hora}:${minutos}`;

