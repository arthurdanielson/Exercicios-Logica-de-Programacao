/*
63) Escreva um algoritmo para ler 10 números e ao final da leitura escrever a soma total dos 10
números lidos.

Aluno: Arthur Danielson Viana
Data: 17/06/2024
*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let soma = 0

for (let i = 0; i < arr.length; i++) {
  soma += arr[i]
}

console.log(soma)