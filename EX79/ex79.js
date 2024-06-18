/*
79) Escreva um algoritmo que permita a leitura das notas de uma turma de 20 alunos. Calcular a média
da turma e contar quantos alunos obtiveram nota acima desta média calculada. Escrever a média da
turma e o resultado da contagem. 

Aluno: Arthur Danielson Viana
Data: 17/06/2024
*/

let notas = []
let soma = 0
for (let i = 0; i < 20; i++) {
  let nota = Number(prompt("Digite a nota do aluno " + (i + 1) + ":"))
  notas.push(nota)
  soma += nota
}
let media = soma / 20
let acimaMedia = notas.filter((nota) => nota > media).length
console.log("Média da turma:", media)
console.log("Número de alunos acima da média:", acimaMedia)