/*
37) Uma fruteira está vendendo frutas com a seguinte tabela de preços:

| Fruta    | Até 5 Kg        | Acima de 5 Kg     |
|----------|-----------------|-------------------|
| Morango  | R$ 2,50 por Kg  | R$ 2,20 por Kg    |
| Maçã     | R$ 1,80 por Kg  | R$ 1,50 por Kg    |

Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá
ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de
morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente. 

Aluno: Arthur Danielson Viana
Data: 14/06/2024
*/

let kgMorangos = 6
let kgMacas = 6
let valorTotal = 0

if (kgMorangos <= 5) {
  valorTotal += kgMorangos * 2.5
} else {
  valorTotal += kgMorangos * 2.2
}

if (kgMacas <= 5) {
  valorTotal += kgMacas * 1.8
} else {
  valorTotal += kgMacas * 1.5
}

if (kgMorangos + kgMacas > 8 || valorTotal > 25) {
  valorTotal -= valorTotal * 0.1
}

console.log(`Total: R$${valorTotal.toFixed(2)}`)
