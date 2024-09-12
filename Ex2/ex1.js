var prompt = require('prompt-sync')()

n1 = Number(prompt("Digite o valor que vc tem em Reais:"))

dolar = n1 / 5.48

console.log(`Você tem R$ ${n1} reais`)
console.log(`Você tem $ ${dolar.toFixed(2)} dolares`)
