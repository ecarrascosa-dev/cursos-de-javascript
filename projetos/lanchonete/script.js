
function criarPedido(cliente, itens) {
    return {
        cliente: cliente,
        itens: itens
    }
}

function calcularTotal(itens) {
    let total = 0
    for(item of itens) {
        total += item
    }
    return total
}

function calcularDesconto(total) {
    if(total > 50) {
        return total * 0.10
    }
    return 0
}

document.querySelector('#calcularPedido').addEventListener('click', () => {
    const nome = document.querySelector('#nome').value;
    const itensTexto = document.querySelector('#precos').value;
    const itens = itensTexto.split(',').map(Number)

    const pedido = criarPedido(nome, itens)

    const total = calcularTotal(pedido.itens)
    const desconto = calcularDesconto(total)
    const final = total - desconto
    
    document.querySelector('#resultado').innerText =
    `Cliente: ${pedido.cliente}
    Total: ${total}
    Desconto: ${desconto}
    Valor final: ${final}`


})

