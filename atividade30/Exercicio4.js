const leia = require('readline-sync')

let cargo
let reajuste
let nome = leia.question("Digite o nome do colaborador: ")
let codigocargo = leia.questionInt("Digite o codigo do cargo (1 a 6): ")
let salario = leia.questionInt("Digite o salario atual: ")

switch (codigocargo) {
    case 1:
        cargo = "Gerente"
        reajuste = 0.10
        break
    case 2:
        cargo = "Vendedor"
        reajuste = 0.07
        break
    case 3:
        cargo = "Supervisor"
        reajuste = 0.09
        break
    case 4:
        cargo = "Motorista"
        reajuste = 0.06
        break
    case 5:
        cargo = "Estoquista"
        reajuste = 0.05
        break
    case 6:
        cargo = "Técnico de TI"
        reajuste = 0.08
        break
    default:
        console.log("Código de cargo inválido!")   
}        
novosalario = salario + (reajuste * salario)

    console.log("Nome do colaborador: " + nome)
    console.log("Cargo: " + cargo)
    console.log("Salário R$ " + novosalario)
