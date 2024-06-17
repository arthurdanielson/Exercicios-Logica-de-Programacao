/*
67) Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15
(inclusive) e 100 (inclusive). 

Aluno: Arthur Danielson Viana
Data: 17/06/2024
*/

let soma = 0

for (let i = 15; i <= 100; i++) {
  soma += i
}

console.log((soma / 75).toFixed(2))
