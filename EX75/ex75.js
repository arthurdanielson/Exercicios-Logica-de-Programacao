/*
75) Escreva um algoritmo que imprima as seguintes seqüências de números: (1, 1 2 3 4 5 6 7 8 9 10)
(2, 1 2 3 4 5 6 7 8 9 10) (3, 1 2 3 4 5 6 7 8 9 10) (4, 1 2 3 4 5 6 7 8 9 10) e assim sucessivamente, até
que o primeiro número (antes da vírgula), também chegue a 10. 

Aluno: Arthur Danielson Viana
Data: 17/06/2024
*/

for (let i = 1; i <= 10; i++) {
  let str = `${i}, `
  for (let j = 1; j <= 10; j++) {
    str += `${j} `
  }
  console.log(str)
}

