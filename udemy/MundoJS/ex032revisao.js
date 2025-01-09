/* function calcularVetor(vetor, numero)  {
    for(let i = 0; i < vetor.length; i++){
        if (vetor[i] > 5){
            vetor[i] = vetor[i] * numero
        }
    }
    return vetor;
}

console.log(calcularVetor([1,5,10, 20], 5))  */

[[1,1],[1,1,1],[1,1]]

function somarSubvetores(vetor){
    let resultado = []

    for(let indice = 0; indice < vetor.length; indce++) {
        let subVetor = vetor[indice];
        let soma = 0;
        for(let subIndice = 0; subIndice < subVetor.length; subIndice++) {
            soma = soma + subVetor[subIndice]
        }

        resultado[indice] = soma
    }

    return resultado 

}