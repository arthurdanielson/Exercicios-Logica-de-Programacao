/*
64) Escreva um algoritmo para ler 10 números. Todos os números lidos com valor inferior a 40 devem
ser somados. Escreva o valor final da soma efetuada. 

Aluno: Arthur Danielson Viana
Data: 17/06/2024
*/

let arr = [1, 2, 3, 4, 5, 40, 41, 42, 43, 44]
let soma = 0

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 40) {
    soma += arr[i]
  }
}

console.log(soma)