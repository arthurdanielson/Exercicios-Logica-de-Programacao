/*
90) Faça um algoritmo para ler um vetor de 30 números. Após isto, ler mais um número qualquer,
calcular e escrever quantas vezes esse número aparece no vetor. 

Aluno: Arthur Danielson Viana
Data: 17/06/2024
*/

let numeros = []
for (let i = 0; i < 30; i++) {
  numeros.push(parseFloat(prompt("Digite um número:")))
}
let numeroProcurado = parseFloat(
  prompt("Digite um número para contar as ocorrências:")
)
let contador = numeros.filter((num) => num === numeroProcurado).length
console.log("O número", numeroProcurado, "aparece", contador, "vezes no vetor.")
