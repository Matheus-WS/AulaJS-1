var prompt = require('prompt-sync')()

n1 = Number(prompt("Digite o valor da conta:"))
tx = n1 * 0.15

total = tx + n1

console.log(`Valor da conta é: ${n1.toFixed(2)}`)
console.log(`Valor da Taxa do garçon é: ${tx.toFixed(2)}`)
console.log(`Valor total é: ${total.toFixed(2)}`)