/*
31) Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam
ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma
dos outros 2 lados. 

Aluno: Arthur Danielson Viana
Data: 14/06/2024
*/

let A = 3
let B = 10
let C = 5

if (A < B + C) {
  if (B < A + C) {
    if (C < A + B) {
      console.log("triângulo")
    } else {
      console.log("não forma uma triângulo")
    }
  } else {
    console.log("não forma uma triângulo")
  }
} else {
  console.log("não forma uma triângulo")
}
