// 1 - inserir dado
localStorage.setItem("name", "Eduardo")

// 2 - restart sem perder dados

// 3 - resgatar item
const name = localStorage.getItem("name")
console.log(name)

// 4 - resgate de item que não existe 
const lastName = localStorage.getItem("lastName")
console.log(lastName)

if (!lastName) {
    console.log("Sem sobrenome!")
}

// 5 - remover item
localStorage.removeItem("lastName")
localStorage.removeItem("name")

// 6 - limpar todos os itens
localStorage.setItem("a", 2)
localStorage.setItem("b", 4)

localStorage.clear()




// 7 - sessionStorage
sessionStorage.setItem("number", 123)

// 8 - reiniciar e perder dados
const n = sessionStorage.getItem("number")
console.log(n)

sessionStorage.clear()


// 9 - salvar objeto
const person = {
    name: "Eduardo",
    age: 16,
    job: "Desempregado",
}

localStorage.setItem("person", JSON.stringify(person))

const getPerson = localStorage.getItem("person")
console.log(getPerson)

const personObject = JSON.parse(getPerson)
console.log(personObject)