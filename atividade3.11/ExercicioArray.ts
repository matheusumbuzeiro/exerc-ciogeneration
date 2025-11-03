
import leia = require("readline-sync")
let cores: Array<string> = []

for (let i = 0; i <= 4; i++) {
    let cor = leia.question("Digite uma cor: ")
    cores.push(cor)
}

console.log("\nListar cores: ")
for (let cor of cores) {
    console.log(cor)
}

let coresCrescentes = cores.sort()

console.log("\nOrdenar cores: ")
for (let cor of coresCrescentes) {
    console.log(cor)
}
