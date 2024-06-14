/*
35) Um posto está vendendo combustíveis com a seguinte tabela de descontos:

Álcool   | até 20 litros, desconto de 3% por litro 
         | acima de 20 litros, desconto de 5% por litro 

Gasolina | até 20 litros, desconto de 4% por litro
         | acima de 20 litros, desconto de 6% por litro 

Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da
seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se
que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90.

Aluno: Arthur Danielson Viana
Data: 14/06/2024
*/

let numLitrosVendidos = 30
let tipoCombustivel = "G"
let desconto5 = numLitrosVendidos - 20
let valorFinal

if (tipoCombustivel === "A") {
  console.log("Tipo de combustível: Álcool")
  if (desconto5 > 0) {
    valorFinal = 20 * (2.9 - 2.9 * 0.03) + desconto5 * (2.9 - 2.9 * 0.05)
  } else {
    valorFinal = numLitrosVendidos * (2.9 - 2.9 * 0.03)
  }
} else {
  console.log("Tipo de combustível: Gasolina")
  if (desconto5 > 0) {
    valorFinal = 20 * (3.3 - 3.3 * 0.04) + desconto5 * (3.3 - 3.3 * 0.06)
  } else {
    valorFinal = numLitrosVendidos * (3.3 - 3.3 * 0.04)
  }
}

console.log(`Litros: ${numLitrosVendidos}L`)
console.log(`Valor final: R$${valorFinal.toFixed(2)}`)
