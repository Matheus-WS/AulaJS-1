var prompt = require('prompt-sync')()

n1 = Number(prompt("Digite a nota 1: "))
n2 = Number(prompt("Digite a nota 2: "))
n3 = Number(prompt("Digite a nota 3: "))

media = (n1 + n2 + n3) / 3

console.log(`Nota 1 é : ${n1}`)
console.log(`Nota 2 é ${n2}`)
console.log(`Nota 3 é ${n3}`)
console.log(`Media é igual a ${media}`)