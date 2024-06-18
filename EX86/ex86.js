/*
86) Faça um algoritmo para ler 10 números e armazenar em um vetor. Após isto, o algoritmo deve
ordenar os números no vetor em ordem crescente. Escrever o vetor ordenado. 

Aluno: Arthur Danielson Viana
Data: 17/06/2024
*/

let numeros = []
for (let i = 0; i < 10; i++) {
  numeros.push(parseFloat(prompt("Digite um número:")))
}
numeros.sort((a, b) => a - b)
console.log("Vetor ordenado:", numeros)
