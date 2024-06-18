/*
85) Faça um algoritmo para ler e armazenar em um vetor a temperatura média de todos os dias do ano.
Calcular e escrever:

a) Menor temperatura do ano
b) Maior temperatura do ano
c) Temperatura média anual
d) O número de dias no ano em que a temperatura foi inferior a média anual 

Aluno: Arthur Danielson Viana
Data: 17/06/2024
*/

let temperaturas = []
for (let i = 0; i < 365; i++) {
  temperaturas.push(
    parseFloat(prompt("Digite a temperatura média do dia " + (i + 1) + ":"))
  )
}
let menorTemp = Math.min(...temperaturas)
let maiorTemp = Math.max(...temperaturas)
let mediaAnual =
  temperaturas.reduce((acc, temp) => acc + temp, 0) / temperaturas.length
let diasAbaixoMedia = temperaturas.filter((temp) => temp < mediaAnual).length

console.log("Menor temperatura do ano:", menorTemp)
console.log("Maior temperatura do ano:", maiorTemp)
console.log("Temperatura média anual:", mediaAnual)
console.log(
  "Número de dias com temperatura abaixo da média anual:",
  diasAbaixoMedia
)
