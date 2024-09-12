var prompt = require('prompt-sync')()

n1 = Number(prompt("Digite o valor da conta:"))
tx = n1 * 0.15
avista = n1 - tx
parc = n1 / 3

console.log(`Preço ${n1}`)
console.log(`Preço à vista ${avista.toFixed(2)}`)
console.log(`parcelado em 3x ${parc.toFixed(2)}`)