// //criar um elemento <li>
// let elemento = document.createElement('li')
//criar o nó do texto
// let texto = document.createTextNode('item da lista adicionado')
// elemento.appendChild(texto)

// Recuperando o elemento e anexando o elemento <li> ao final da lista
// let lista = document.getElementsByTagName('ul')[0]
// lista.appendChild(elemento)


//inserBefore
var lista = document.getElementsByTagName('ul')[0]
var itens = lista.getElementsByTagName('li')

//criando elemento
let elemento = document.createElement('li')
elemento.textContent = "outro item"

//inserindo em uma posição expecifica
lista.insertBefore(elemento, itens[6])


// removechil
lista.removeChild(itens[1])