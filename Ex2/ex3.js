var prompt = require('prompt-sync')()


n1 = Number(prompt("Digite a quantidade de dias trabalhada: "))

nd = n1 * 8

valor = nd * 25

console.log(`Dias trabalhados foi: ${n1}`)
console.log(` O valor do seu salario é: ${valor.toFixed(2)}`)
