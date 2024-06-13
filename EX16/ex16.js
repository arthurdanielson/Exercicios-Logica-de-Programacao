/*
16) As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem
compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e
escreva o custo total da compra. 

Arthur Danielson Viana
13/06/2024
*/

let numMacasCompradas = 11;
let precoFinal;

if (numMacasCompradas >= 12) {
  precoFinal = (numMacasCompradas * 1.00).toFixed(2);
} else {
  precoFinal = (numMacasCompradas * 1.30).toFixed(2);
}

console.log(precoFinal);