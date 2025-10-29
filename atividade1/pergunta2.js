
// Início
const leia = require('readline-sync')
let nota1
let nota2
let nota3
let nota4
let media

// Solicita nota ao usuário
console.log("\nDigite sua primeira nota: ")
nota1 = leia.questionFloat()

console.log("\nDigite sua segunda nota: ")
nota2 = leia.questionFloat()

console.log("\nDigite sua terceira nota: ")
nota3 = leia.questionFloat()

console.log("\nDigite sua quarta nota: ")
nota4 = leia.questionFloat()

// Calculo da média
media = (nota1 + nota2 + nota3 + nota4) /4
console.log("\nA sua média final é: " + media + ".")