/*
41)  Faça  um  algoritmo  para  ler  as  3  notas  obtidas  por  um  aluno  nas  3  verificações  e  a  média  dos 
exercícios que fazem parte da avaliação. Calcular a média de aproveitamento, usando a fórmula abaixo 
e escrever o conceito do aluno de acordo com a tabela de conceitos mais abaixo: 

                                  N1 + N2 * 2 + N3 * 3 + Média_dos_Exercícios 
Média_de_Aproveitamento  = --------------------------------------------------------- 
                                                      7 

A atribuição de conceitos obedece a tabela abaixo: 

Média de Aproveitamento   Conceito
>= 9,0                    A
>= 7,5 e < 9,0            B
>= 6,0 e < 7,5            C
< 6,0                     D

Aluno: Arthur Danielson Viana
Data: 14/06/2024
*/

let n1 = 9
let n2 = 8
let n3 = 7
let mediaExercicios = 8
let mediaAprovaitamento = (n1 + n2 * 2 + n3 * 3 + mediaExercicios) / 7
let conceito

if (mediaAprovaitamento >= 9) {
  conceito = "A"
} else if (mediaAprovaitamento >= 7.5 && mediaAprovaitamento < 9) {
  conceito = "B"
} else if (mediaAprovaitamento >= 6 && mediaAprovaitamento < 7.5) {
  conceito = "C"
} else {
  conceito = "D"
}

console.log(`Média de Aproveitamento: ${mediaAprovaitamento.toFixed(2)}`)
console.log(`Conceito: ${conceito}`)
