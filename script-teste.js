const caixasAzul = document.getElementsByClassName("azul")
const caixasAmarelo = document.getElementsByClassName("amarelo")
const caixasVermelha = document.getElementsByClassName("vermelho")

function filtroTodos() {
    const caixasTodas = Math.max(caixasAzul.length, caixasAmarelo.length, caixasVermelha.length)
    for(let i = 0; i < caixasTodas; i++) {
        if (i < caixasAzul.length) {
            caixasAzul[i].style.display = "flex"
        }
        if (i < caixasAmarelo.length) {
            caixasAmarelo[i].style.display = "flex"
        }
        if (i < caixasVermelha.length) {
            caixasVermelha[i].style.display = "flex"
        }
        
        
    }
}

function filtroAzul() {
    const maxYellowRed = Math.max(caixasAzul.length, caixasAmarelo.length, caixasVermelha.length)
    for(let i = 0; i < maxYellowRed; i++){
        if (i < caixasAzul.length){
            caixasAzul[i].style.display = "flex"
         }
        if (i < caixasAmarelo.length){
           caixasAmarelo[i].style.display = "none"
        }
        if (i < caixasVermelha.length){ 
            caixasVermelha[i].style.display = "none"
        }
    }
}

function filtroAmarelo() {
    const maxBlueRed = Math.max(caixasAzul.length, caixasVermelha.length, caixasAmarelo.length)
    for(let i = 0; i < maxBlueRed; i++) {
        if (i < caixasAmarelo.length){
            caixasAmarelo[i].style.display = "flex"
         }
        if (i < caixasAzul.length) {
            caixasAzul[i].style.display = "none"
        }
        if (i < caixasVermelha.length) {
            caixasVermelha[i].style.display = "none"
        }
    }
}

function filtroVermelho() {
    const maxBlueRed = Math.max(caixasAzul.length, caixasVermelha.length, caixasAmarelo.length)
    for(let i = 0; i < maxBlueRed; i++) {
        if (i < caixasAmarelo.length){
            caixasAmarelo[i].style.display = "none"
         }
        if (i < caixasAzul.length) {
            caixasAzul[i].style.display = "none"
        }
        if (i < caixasVermelha.length) {
            caixasVermelha[i].style.display = "flex"
        }
    }
}

