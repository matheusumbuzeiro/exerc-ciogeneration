import leia = require("readline-sync");

const numeros: Set<number> = new Set<number>();

for(let i = 0; i< 10; i ++){
    let numero = leia.questionInt(`Digite o ${i+1} numero: `, 
      {limitMessage: "Por favor, digite um numero valido."});
    numeros.add(numero);
}
console.log("\nLista de dados do Set:\n");
for(let numero of numeros){
    console.log(numero);
}