
const leia = require('readline-sync')
// Saldo inicial
let saldo = 1000.00
let operacao = leia.questionInt("Digite o codigo da operacao 1-Saldo, 2-Saque, 3-Deposito: ")

switch (operacao) {
    case 1:
        console.log("Operação - Saldo")
        console.log("Saldo: R$ " + saldo)
        break
    
    case 2:
        let valorsaque = leia.questionInt("Digite o valor de saque: ")
        console.log("Operação - Saque")
        if (valorsaque > saldo) {
            console.log("Saldo Insuficiente!")
        }   else {
            saldo = saldo - valorsaque
            console.log("Novo Saldo: R$ " + saldo)
        }
        break

    case 3:
        let valordeposito = leia.questionInt("Digite o valor do depósito: ")
        console.log("Operação - Depósito")
        saldo = saldo + valordeposito 
        console.log("Novo Saldo R$ " + saldo)
        break

         default:
            console.log("Operação Inválida!")
}