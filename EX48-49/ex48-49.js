/*
48)  Escreva  um  algoritmo  para  ler  as  notas  da  1a.  e  2a.  avaliações  de  um  aluno,  calcule  e  imprima  a 
média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada 
nota. 

49)  Acrescente  uma  mensagem  'NOVO  CÁLCULO  (S/N)?'  ao  final  do  exercício  [48].  Se  for 
respondido 'S' deve retornar e executar um novo cálculo, caso contrário deverá encerrar o algoritmo.

Aluno: Arthur Danielson Viana
Data: 15/06/2024
*/

let nota1, nota2
let condition

do {
  nota1 = Number(prompt("Nota 1:"))

  if (nota1 > 10 || nota1 < 0) {
    while (nota1 > 10 || nota1 < 0) {
      nota1 = Number(
        prompt(`VALOR INVÁLIDO
Nota 1:`)
      )
    }
  }

  nota2 = Number(prompt("Nota 2:"))

  if (nota2 > 10 || nota2 < 0) {
    while (nota2 > 10 || nota2 < 0) {
      nota2 = Number(
        prompt(`VALOR INVÁLIDO
Nota 2:`)
      )
    }
  }

  condition = prompt(`Média: ${((nota1 + nota2) / 2).toFixed(2)}
NOVO  CÁLCULO  (S/N)?`)
} while (condition === "S")
