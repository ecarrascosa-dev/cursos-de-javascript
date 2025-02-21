// toLowerCase e toUpperCase

var frase = "Esta é a frase que vamos manipular"

console.log(frase.toLowerCase())
console.log(frase.toUpperCase())

// trim

var nomeS = "      Eduardo   (Sem Trim)"
var nomeC = "      Eduardo   (Com Trim)"
var nomeTrim = nomeC.trim()
console.log(nomeS)
console.log(nomeTrim)

// split 

console.log(frase.split(" "))

var tags = "PHP JS HTML CSS JAVA"
console.log(tags.split(" "))

// lastIndexOf
var frase2 = "Eu quero a última palavra dessa frase teste"
console.log(frase2.indexOf("teste"))
console.log(frase2.lastIndexOf("teste"))