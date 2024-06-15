/*
42) Uma empresa quer verificar se um empregado está qualificado para a aposentadoria ou não. Para 
estar em condições, um dos seguintes requisitos deve ser satisfeito: 

 - Ter no mínimo 65 anos de idade. 
 - Ter trabalhado no mínimo 30 anos. 
 - Ter no mínimo 60 anos e ter trabalhado no mínimo 25 anos. 

Com base nas informações acima, faça um algoritmo que leia: o número do empregado (código), o ano 
de seu nascimento e o ano de seu ingresso na empresa. O programa deverá escrever a idade e o tempo 
de trabalho do empregado e a mensagem 'Requerer aposentadoria'  ou  'Não requerer'. 

Aluno: Arthur Danielson Viana
Data: 14/06/2024
*/

let codigoEmpregado = 1
let anoNascimento = 1974	
let anoIngresso = 2000	
let anoAtual = 2024

let idade = anoAtual - anoNascimento
let tempoTrabalho = anoAtual - anoIngresso

if (idade >= 65) {
  console.log("Requerer aposentadoria")
} else if (tempoTrabalho >= 30) {
  console.log("Requerer aposentadoria")
} else if (idade >= 60 && tempoTrabalho >= 25) {
  console.log("Requerer aposentadoria")
} else {
  console.log("Não requerer")
}
