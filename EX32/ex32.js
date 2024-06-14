/*
32) Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome
do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE. 

Aluno: Arthur Danielson Viana
Data: 14/06/2024
*/

let nomeTime1 = "S.E. Palmeiras"
let nomeTime2 = "Flamengo"
let golsTime1 = 3
let golsTime2 = 0

if (golsTime1 > golsTime2) {
  console.log(`Vencedor: ${nomeTime1}`)
} else if (golsTime2 > golsTime1) {
  console.log(`Vencedor: ${nomeTime2}`)
} else {
  console.log("EMPATE")
}
