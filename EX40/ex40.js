/*
40)  Faça  um  algoritmo  para  ler:  a  descrição  do  produto  (nome),  a  quantidade  adquirida  e  o  preço 
unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total 
a pagar (total a pagar = total - desconto), sabendo-se que:

 - Se quantidade  <= 5  o desconto será de 2% 
 - Se quantidade  > 5  e  quantidade  <=10  o desconto será de 3% 
 - Se quantidade  >  10 o desconto será de 5%

Aluno: Arthur Danielson Viana
Data: 14/06/2024
*/

let descricaoProduto = "Farinha de Trigo"
let quantidadeAdquirida = 2
let precoUnitario = 2.5
let total = quantidadeAdquirida * precoUnitario

if (quantidadeAdquirida <= 5) {
  total -= total * 0.02
} else if (quantidadeAdquirida > 5 && quantidadeAdquirida <= 10) {
  total -= total * 0.03
} else {
  total -= total * 0.05
}

console.log(`Total a pagar: R$${total}`)
