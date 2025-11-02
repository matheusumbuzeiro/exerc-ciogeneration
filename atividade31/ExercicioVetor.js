const { questionInt } = require("readline-sync");

let Array = []
let soma = 0
let indicesImpares = []
let elementosPares = []

// Entrada dos números
for ( i = 0; i <= 9 ; i++) {
  let num = questionInt(`Digite o ${i + 1} numero: `)
  Array.push(num);
}
// Números ímpares 1, 3, 5, 7, 9
for (i = 0; i < Array.length; i++) {
  if (i % 2 != 0) {
    indicesImpares.push(Array[i])
  }
}

// Números pares 2, 4, 6, 8, 10
for (i = 0; i < Array.length; i++) {
  if (Array[i] % 2 == 0) {
    elementosPares.push(Array[i])
  }
}

// Soma e média
for (i = 0; i < Array.length; i++) {
  soma = soma + Array[i]
}
let media = soma / Array.length

// Saída
console.log("Elementos ímpares:" + indicesImpares.join())
console.log("Elementos pares:" + elementosPares.join())
console.log("Soma:", soma)
console.log("Média:", media.toFixed(9))
