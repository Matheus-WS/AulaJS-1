var prompt = require('prompt-sync')()

n1 = Number(prompt("Digite a quantidade em KM percorridos: "))
n2 = Number(prompt("Digite dos dias alugados do carro: "))

carro = n2 * 90
km = n1 * 0.20

total = carro + km

console.log(`Quantidade de KM percorridas foram de: ${n1}`)
console.log(`Os dias alugados foram: ${n2}`)
console.log(`O valor total a ser pago é R$ ${total} reais`)