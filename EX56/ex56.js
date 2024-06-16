/*
56) Ler um valor inteiro (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor 
lido.

Aluno: Arthur Danielson Viana
Data: 16/06/2024
*/

let num = 2

if (num < 1 || num > 10) {
  console.log("VALOR INVÁLIDO!")
} else {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`)
  }
}
