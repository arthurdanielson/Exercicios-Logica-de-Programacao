/*
72) Faça um algoritmo para ler o código e o preço de 15 produtos, calcular e escrever:
- o maior preço lido
- a média aritmética dos preços dos produtos

Aluno: Arthur Danielson Viana
Data: 17/06/2024
*/

let maior = Number.NEGATIVE_INFINITY
let soma = 0

for (let i = 1; i <= 15; i++) {
  let precoProduto = Number(prompt(`Digite o valor do produto ${i}`))
  soma += precoProduto

  if (precoProduto > maior) maior = precoProduto
}

document.write(`MAIOR PREÇO: R$${maior.toFixed(2)}<br>
  MÉDIA: R$${(soma / 15).toFixed(2)}`)