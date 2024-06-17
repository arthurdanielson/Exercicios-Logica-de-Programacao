/*
68) Uma loja está levantando o valor total de todas as mercadorias em estoque. Escreva um algoritmo
que permita a entrada das seguintes informações: a) o número total de mercadorias no estoque; b) o
valor de cada mercadoria. Ao final imprimir o valor total em estoque e a média de valor das
mercadorias.

69) O mesmo exercício anterior, mas agora não será informado o número de mercadorias em estoque.
Então o funcionamento deverá ser da seguinte forma: ler o valor da mercadoria e perguntar ‘MAIS
MERCADORIAS (S/N)?’. Ao final, imprimir o valor total em estoque e a média de valor das
mercadorias em estoque. 

Aluno: Arthur Danielson Viana
Data: 17/06/2024
*/

let numMercadorias = 0
let somaValorMercadorias = 0
let verificador = ""

do {
  numMercadorias++
  somaValorMercadorias += Number(
    prompt(`Digite o valor da mercadoria ${numMercadorias}`)
  )

  verificador = prompt("MAIS MERCADORIAS (S/N)?").toUpperCase()
} while (verificador === "S")

document.write(
  `Valor total em estoque: R$${somaValorMercadorias.toFixed(
    2
  )}<br>Média de valor das mercadorias: R$${(
    somaValorMercadorias / numMercadorias
  ).toFixed(2)}`
)
