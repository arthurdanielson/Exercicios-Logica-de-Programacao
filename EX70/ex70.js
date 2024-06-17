/*
70) Faça um programa que leia 100 valores e no final, escreva o maior e o menor valor lido. 

Aluno: Arthur Danielson Viana
Data: 17/06/2024
*/

let arr = [1, 2, 3, 10, -1, -5, 100, 0, 15, 20]
let maior = arr[0]
let menor = arr[0]

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > maior) maior = arr[i]
  else if (arr[i] < menor) menor = arr[i]
}

console.log(`maior: ${maior}
menor: ${menor}`)