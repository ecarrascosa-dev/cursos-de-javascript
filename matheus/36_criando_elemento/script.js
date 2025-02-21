// inserindo elemento no body
var novoParagrafo = document.createElement("p")

console.log(novoParagrafo)

var texto = document.createTextNode("Este é o texto que vou criar")

novoParagrafo.appendChild(texto)

var body = document.querySelector("body")

body.appendChild(novoParagrafo)


// Inserindo em um container

var container = document.getElementById("container")

var el = document.createElement("h1")

el.appendChild(document.createTextNode("Título criado pelo JavaScript"))

container.appendChild(el)