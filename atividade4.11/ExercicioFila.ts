import { Queue } from "./Queue";
import readline = require('readline-sync');
const fila = new Queue<string>()
let opcao

do {
console.log("-------------------------------");
console.log("    1 - Adicionar Cliente na Fila");
console.log("    2 - Listar todos os Clientes");
console.log("    3 - Retirar Cliente da Fila");
console.log("    0 - Sair");
console.log("-------------------------------");
opcao = readline.questionInt("Entre com a opcao desejada: ");
console.log()
console.log("Fila vazia? ", fila.isEmpty())

fila.enqueue
switch (opcao) {
        case 1:
            const nome = readline.question("Digite o nome do cliente: ");
            fila.enqueue(nome);
            console.log("\nFila: ");
            fila.printQueue();
            console.log(`${nome} adicionado a fila.`)
            break;

        case 2:
            if (fila.isEmpty()){
                console.log("A fila está vazia!")
            }else 
            fila.printQueue();
            break;

        case 3:
            if (fila.isEmpty()) {
            console.log("A fila está vazia, ninguém para retirar!");
            } else {
            const clienteChamado = fila.dequeue();
            console.log(`\nCliente chamado: ${clienteChamado}`);
            }
            break;
        
        case 0:   
            console.log("\nPrograma finalizado.\n");
            break;
            
            default:
      console.log("Opção inválida! Tente novamente.");
}
}while (opcao !== 0);
