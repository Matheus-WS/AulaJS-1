var prompt = require('prompt-sync')()

n1 = Number(prompt("Digite o valor da conta:"))
n2 = Number(prompt("Digite o numero de pessoas a pagar:"))

valor = n1 / n2

console.log(`O valor total da compra é ${n1}`)
console.log(`O valor a ser pago por pessoa é ${valor.toFixed(2)}`)