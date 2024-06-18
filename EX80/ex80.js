/*
80) Ler um vetor Q de 20 posições (aceitar somente números positivos). Escrever a seguir o valor do
maior elemento de Q e a respectiva posição que ele ocupa no vetor. 

Aluno: Arthur Danielson Viana
Data: 17/06/2024
*/

let Q = []
for (let i = 0; i < 20; i++) {
  let num = Number(prompt("Digite um número positivo:"))
  if (num > 0) {
    Q.push(num)
  } else {
    i--
    console.log("Número inválido, digite novamente.")
  }
}
let maior = Math.max(...Q)
let posicaoMaior = Q.indexOf(maior)
let menor = Math.min(...Q)
let posicaoMenor = Q.indexOf(menor)
console.log("Maior elemento:", maior)
console.log("Posição do maior elemento:", posicaoMaior)
console.log("Menor elemento:", menor)
console.log("Posição do menor elemento:", posicaoMenor)
