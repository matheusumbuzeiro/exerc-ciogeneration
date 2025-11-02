const leia = require('readline-sync')

let pares = 0
let impares = 0
let contador

for (let contador = 1; contador <= 10; contador++) {
    
    let numero = leia.questionInt(`Digite o numero ${contador}: ` )
    if (numero % 2 === 0) {
        pares++
    }   else {
        impares++
    }

}
    console.log(`\nTotal de números pares: ${pares}`)
    console.log(`\nTotal de números impares: ${impares}`)
    