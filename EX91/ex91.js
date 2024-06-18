/*
91) Faça um algoritmo para ler 50 números e armazenar em um vetor VET, verificar e escrever se
existem números repetidos no vetor VET e em que posições se encontram. 

Aluno: Arthur Danielson Viana
Data: 17/06/2024
*/

let VET = []
for (let i = 0; i < 50; i++) {
  VET.push(parseFloat(prompt("Digite um número:")))
}
let repetidos = {}
for (let i = 0; i < 50; i++) {
  if (repetidos[VET[i]]) {
    repetidos[VET[i]].push(i)
  } else {
    repetidos[VET[i]] = [i]
  }
}
let existeRepetidos = false
for (let numero in repetidos) {
  if (repetidos[numero].length > 1) {
    console.log("Número repetido:", numero, "nas posições:", repetidos[numero])
    existeRepetidos = true
  }
}
if (!existeRepetidos) {
  console.log("Não existem números repetidos no vetor.")
}
