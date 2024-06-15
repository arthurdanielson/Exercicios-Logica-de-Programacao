/*
44)  Escreva um algoritmo para ler 2 valores e se o segundo valor informado for ZERO, deve ser lido 
um novo valor, ou seja, para o segundo valor não pode ser aceito o valor zero e imprimir o resultado 
da divisão do primeiro valor lido pelo segundo valor lido. (utilizar a estrutura REPITA). 

45) Reescreva o exercício anterior utilizando a estrutura ENQUANTO. 

46)  Acrescentar  uma  mensagem  de  'VALOR  INVÁLIDO'  no  exercício  [44]  caso  o  segundo  valor 
informado seja ZERO. 

47)  Acrescentar  uma  mensagem  de  'VALOR  INVÁLIDO'  no  exercício  [45]  caso  o  segundo  valor 
informado seja ZERO. 

Aluno: Arthur Danielson Viana
Data: 15/06/2024
*/

let num1 = prompt("Digite o valor 1")
let num2 = prompt("Digite o valor 2")

if (num2 == 0) {
  while (num2 == 0) {
    num2 = prompt(`VALOR INVÁLIDO
Digite o valor 2`)
  }
}

alert(num1 / num2)
