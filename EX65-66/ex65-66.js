/*
65) Ler 2 valores, calcular e escrever a soma dos inteiros existentes entre os 2 valores lidos (incluindo
os valores lidos na soma). Considere que o segundo valor lido será sempre maior que o primeiro valor
lido. 

66) O mesmo exercício anterior, mas agora, considere que o segundo valor lido poderá ser maior ou
menor que o primeiro valor lido, ou seja, deve-se testá-los. 

Aluno: Arthur Danielson Viana
Data: 17/06/2024
*/

let num1 = 10
let num2 = 1
let soma = 0

if (num1 > num2) {
  for (let i = num2; i <= num1; i++) {
    soma += i
  }
} else {
  for (let i = num1; i <= num2; i++) {
    soma += i
  }
}

console.log(soma)
