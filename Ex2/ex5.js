var prompt = require('prompt-sync')()

n1 = Number(prompt("Digite a quantidade de cigarros que você fuma por dia: "))
n2 = Number(prompt("Digite quantos anos você fuma: "))

tc = n1 * 365 * n2  //tc = totalcigarros
mp = tc * 10        // mp = minutosPerdidos
dp = mp / (24 *60) // dp = DiasPerdidos

console.log(`Você fuma ${n1} dias de vida`)
console.log(`Você fuma faz ${n2} anos`)
console.log(`Voce perdeu ${dp.toFixed(0)} dias de vida`)
