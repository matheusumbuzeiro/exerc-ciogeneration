
const leia = require('readline-sync')

let A, B, C, soma

A = leia.questionInt("Digite o numero A: ")
B = leia.questionInt("Digite o numero B: ")
C = leia.questionInt("Digite o numero C: ")

soma = A + B

if(soma > C){
    console.log("A soma de A + B é maior do que C")
} else if (soma< C){
    console.log("A soma de A + B é menor do que C")
} else {
    console.log("A soma de A + B é igual a C")
}