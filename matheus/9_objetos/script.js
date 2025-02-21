var obj = {
    nome: "Eduardo",
    idade: 15,
    profissao: "Programador",
    estudante: true
};

console.log(obj)
console.log(typeof obj)
console.log(obj.nome)

console.log(`Bem-vindo(a) ${obj.nome}. ${obj.nome} é estudante? ${obj.estudante}`)

if (obj.estudante == true) {
    console.log(`Você tem direito a carterinha de Estudante, ${obj.nome}`)
} else {
    console.log(`${obj.nome} Você não tem acesso a carterinha de Estudante.`)
}