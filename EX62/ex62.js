/*
62) Ler o número de alunos existentes em uma turma e, após isto, ler as notas destes alunos, calcular e
escrever a média aritmética dessas notas lidas. 

Aluno: Arthur Danielson Viana
Data: 17/06/2024
*/

let numAlunos = Number(prompt("Qual o número de alunos?"))
let somaNotas = 0

for (let i = 1; i <= numAlunos; i++) {
  somaNotas += Number(prompt(`Digite a nota do aluno ${i}`))
}

document.write((somaNotas / numAlunos).toFixed(2))
