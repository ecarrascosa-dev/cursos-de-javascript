let pessoa = {
    nome: "Eduardo",
    idade: 15,
    falar: function() {
        console.log("Olá, tudo bem?")
    },
    soma: function(a, b) {
        return a + b;
    }
}

console.log(pessoa.nome)
pessoa.falar()
var soma = pessoa.soma(2, 4)
console.log(soma)