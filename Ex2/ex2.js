var prompt = require('prompt-sync')()

n1 = Number(prompt("Digite um numero: "))

dobro = n1 * 2
div = n1 / 3

console.log(`Numero que vc digitou ${n1}`)
console.log(`Dobro do numero é ${dobro}`)
console.log(`Terça parte é ${div.toFixed(3)}`)