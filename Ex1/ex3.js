var prompt = require('prompt-sync')()

n1 = Number(prompt("Digite o numero de dias: "))

hd = n1 * 24

hm = hd * 60

console.log(`O numero de dias foi: ${n1}`)
console.log(`O nuemro de horas é: ${hd}`)
console.log(`O numero de minutos é de: ${hm}`)