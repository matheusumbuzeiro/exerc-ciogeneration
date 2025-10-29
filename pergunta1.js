//Início

const leia = require('readline-sync')
let salario
let abono
let novosalario

// Solicita salário ao usuário
console.log("\nDigite seu Salário: ")
salario = leia.questionFloat()

// Solicita abono ao usuário
console.log("\nDigite seu Abono: ")
abono = leia.questionFloat()

// Calcula novo salário
novosalario = salario + abono
console.log("\nSeu novo salário é: " + novosalario + " reais.")