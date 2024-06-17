/*
59) Ler 10 valores e escrever quantos desses valores lidos são NEGATIVOS. 

Aluno: Arthur Danielson Viana
Data: 17/06/2024
*/
let arr = [1, -2, 3, 4, -5, 6, 7, -8, -9, -10]
let contador = 0

for (let i = 0; i <= arr.length; i++) {
  if (arr[i] < 0) {
    contador++
  }
}

console.log(contador)
