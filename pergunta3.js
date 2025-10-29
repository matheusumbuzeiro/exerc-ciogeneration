
//Início
const leia = require('readline-sync')
let salariobruto
let adicionalnoturno
let horasextras
let descontos
let salarioliquido

// Adicionar os valores
console.log("\nDigite o salário bruto: ")
salariobruto = leia.questionInt()
console.log("\nDigite o adicional noturno: ")
adicionalnoturno = leia.questionInt()
console.log("\nDigite as horas extras: ")
horasextras = leia.questionInt()
console.log("\nDigite os descontos: ")
descontos = leia.questionInt()

// Calculo do salário liquido
salarioliquido = salariobruto + adicionalnoturno + (horasextras * 5) - descontos

// Salario liquido
console.log("\nO salário líquido é: " + salarioliquido + " reais.")