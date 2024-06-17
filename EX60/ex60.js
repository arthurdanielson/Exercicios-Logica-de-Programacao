/*
60) Ler 10 valores e escrever quantos desses valores lidos estão no intervalo [10,20] (inlcuindo os
valores 10 e 20 no intervalo) e quantos deles estão fora deste intervalo. 

Aluno: Arthur Danielson Viana
Data: 17/06/2024
*/

let arr = [1, 5, 10, 15, 16.5, 20, 25, 30, 35, 40]
let contadorIn = 0
let contadorOut = 0

for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= 10 && arr[i] <= 20) {
    contadorIn++
  } else {
    contadorOut++
  }
}

console.log(`${contadorIn} estão no intervalo`)
console.log(`${contadorOut} estão fora`)

