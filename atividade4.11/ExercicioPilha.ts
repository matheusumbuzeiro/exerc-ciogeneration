import { Stack } from "./Stack";
import readline = require('readline-sync');
const pilha = new Stack<string>();
let opcao

do {
console.log("-------------------------------");
console.log("    1 - Adicionar livro na pilha");
console.log("    2 - Listar todos os livros da pilha");
console.log("    3 - Retirar livro da pilha");
console.log("    0 - Sair");
console.log("-------------------------------");
opcao = readline.questionInt("Entre com a opcao desejada: ");
console.log()
pilha.push
switch (opcao) {
        case 1:
            const livro = readline.question("Digite o nome do livro: ");
            pilha.push(livro);
            console.log("\npilha: ");
            pilha.printStack();
            console.log(`${livro} adicionado a pilha.`)
            break;

        case 2:
            if (pilha.isEmpty()){
                console.log("A pilha está vazia!")
            }else 
                pilha.printStack();
            break;

        case 3:
            
            if (pilha.isEmpty()) {
                console.log("A pilha está vazia!");
                }   else {                                           
            const livro = pilha.pop();
                console.log(`Um livro foi retirado: ${livro}`);
                        }
                        pilha.printStack();            
            break;
        
        case 0:   
                console.log("\nPrograma finalizado.\n");
            break;
            
            default:
                console.log("Opção inválida! Tente novamente.");
    }
}
while (opcao !== 0);
