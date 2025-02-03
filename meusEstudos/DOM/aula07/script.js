//hasAttribute - pergunta se tem um algum atributo
    // let opa = document.getElementById('idQualquer').hasAttribute('class');
    // console.log(opa)

    // let opa2 = document.querySelector('.classeQualquer').hasAttribute('id')
    // console.log(opa2)

//getAttribute - pergunta e traz o valor
    // let atributoDiv = document.getElementById('idQualquer')

    //vai retornar o valor que está dentro da classe
        // console.log(atributoDiv.getAttribute('class'))



//setAttribute - altera ou aplica o atributo
//selecionando a div
var atributoDiv = document.getElementById('idQualquer'); //pega o elemento do HTML

console.log(atributoDiv.getAttribute('class')) // pergunta e traz o valor de um atributo que está dentro do elemento

atributoDiv.setAttribute('class', 'arroz') // muda o nome do class que peguei na linha a cima

console.log(atributoDiv.getAttribute('class')) // mostra novamente o class que puxei no let, mas só que com o valor alterado da linha a cima