const gerarRelatorio = document.querySelector('#gerarRelatorio')
document.addEventListener('click', function() {
    const resultado = this.querySelector('#resultado');
    const nome = this.querySelector('#nome').value;
    const horasTrab = this.querySelector('#horasTrab').value;
    const salarioBase = this.querySelector('#salarioBase').value;
    
    const ArrayhorasTrab = horasTrab.split(",")
    const horasExtras = calcularHorasExtras(ArrayhorasTrab);
    const bonus = calcularBonus(horasExtras, salarioBase)
    const salarioFinal = Number(salarioBase) + bonus;
    resultado.innerHTML = `<p>Nome: ${nome}</p> <p>HorasTrab: ${ArrayhorasTrab}</p> <p>Salario Base: ${salarioBase}</p> <p>Horas Extras: ${horasExtras}</p> <p>Bônus: ${bonus}</p> <p>Salário Final: ${salarioFinal}</p>`
});

function calcularHorasExtras(ArrayhorasTrab) {
    horasExtras = 0
    for(horas of ArrayhorasTrab) {
        if(horas > 8) {
            horasExtras += horas - 8;
        }
    }
    return horasExtras;
}

function calcularBonus(horasExtras, salarioBase) {
    if(horasExtras >= 10) {
        return salarioBase * 0.20;
    } else if (ArrayhorasTrab >= 5) {
        return salarioBase * 0.10;
    } else {
        return 0;
    }
}