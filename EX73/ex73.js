/*
73) A prefeitura de uma cidade deseja fazer uma pesquisa entre seus habitantes. Faça um algoritmos
para coletar dados sobre o salário e número de filhos de cada habitante e após as leituras, escrever:

  a) Média de salário da população
  b) Média do número de filhos
  c) Maior salário dos habitantes
  d) Percentual de pessoas com salário menor que R$ 150,00

Obs.: O final da leituras dos dados se dará com a entrada de um “salário negativo”.

Aluno: Arthur Danielson Viana
Data: 17/06/2024
*/

let contador = 0
let salario
let filhos
let somaSalarios = 0
let maiorSalario = Number.NEGATIVE_INFINITY
let somaFilhos = 0
let qtdMenorSalario = 0

do {
  contador++

  salario = Number(prompt("Salário:"))
  if (salario < 0) {
    break
  } else {
    filhos = Number(prompt("Número de filhos:"))
    if (salario > maiorSalario) maiorSalario = salario
    somaSalarios += salario
    somaFilhos += filhos
    if (salario < 150) {
      qtdMenorSalario++
    }
  }
} while (salario > 0)

document.write(`MÉDIA DE SALÁRIO DA POPULAÇÃO: R$${(
  somaSalarios / contador
).toFixed(2)}<br>
  MÉDIA DE FILHOS: ${(somaFilhos / contador).toFixed(2)}<br>
  MAIOR SALÁRIO: R$${maiorSalario.toFixed(2)}<br>
  PERCENTUAL DE PESSOAS COM SALÁRIO MENOR QUE R$ 150,00: ${(
  qtdMenorSalario / contador * 100
).toFixed(2)}%`)

