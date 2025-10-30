
const leia = require('readline-sync')

let numero 

numero = leia.questionFloat("Digite um numero inteiro: ")
if (numero % 2 == 0) 
  if (numero > 0) {
     
    console.log("O número " + numero + " é par e positivo!")
  } else if (numero < 0) {
    
    console.log("O número " + numero + " é par e negativo!")
  } else {
    
    console.log("O número é zero!")
  }
else {
  if (numero > 0) {
    
    console.log("O número " + numero + " é ímpar e positivo!")
  } else if (numero < 0) {
    
    console.log("O número " + numero + " é ímpar e negativo!")
  } else {
    
    console.log("O número é zero!")
  }
}