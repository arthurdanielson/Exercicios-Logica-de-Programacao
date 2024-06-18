/*
89) Faça um algoritmo para ler dois vetores V1 e V2 de 15 números cada. Calcular e escrever a
quantidade de vezes que V1 e V2 possuem os mesmos números e nas mesmas posições. 

Aluno: Arthur Danielson Viana
Data: 17/06/2024
*/

let V1 = []
let V2 = []
for (let i = 0; i < 15; i++) {
  V1.push(parseFloat(prompt("Digite um número para o vetor V1[" + i + "]:")))
  V2.push(parseFloat(prompt("Digite um número para o vetor V2[" + i + "]:")))
}
let contador = 0
for (let i = 0; i < 15; i++) {
  if (V1[i] === V2[i]) {
    contador++
  }
}
console.log(
  "Quantidade de vezes que V1 e V2 possuem os mesmos números nas mesmas posições:",
  contador
)
