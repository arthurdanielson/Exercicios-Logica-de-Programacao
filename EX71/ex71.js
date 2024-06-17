/*
71) Faça um algoritmo para ler uma quantidade e a seguir ler esta quantidade de números. Depois de
ler todos os números o algoritmo deve apresentar na tela o maior dos números lidos e a média dos
números lidos.

Aluno: Arthur Danielson Viana
Data: 17/06/2024
*/

let quantidade = Number(prompt("Digite a quantidade de números:"))
let maior = Number.NEGATIVE_INFINITY
let menor = Number.POSITIVE_INFINITY
let soma = 0

for (let i = 1; i <= quantidade; i++) {
  let num = Number(prompt(`Digite o número ${i}:`))

  maior = Math.max(num, maior)
  menor = Math.min(num, menor)
  soma += num
}

document.write(`MAIOR: ${maior}<br>
  MENOR: ${menor}<br>
  MÉDIA: ${(soma / quantidade).toFixed(2)}`)

