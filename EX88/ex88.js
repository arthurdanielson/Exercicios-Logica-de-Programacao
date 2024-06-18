/*
88) Faça um algoritmo para ler um vetor de 20 números. Após isto, deverá ser lido mais um número
qualquer e verificar se esse número existe no vetor ou não. Se existir, o algoritmo deve gerar um novo
vetor sem esse número. (Considere que não haverão números repetidos no vetor). 

Aluno: Arthur Danielson Viana
Data: 17/06/2024
*/

let numeros = []
for (let i = 0; i < 20; i++) {
  numeros.push(parseFloat(prompt("Digite um número:")))
}
let numeroProcurado = parseFloat(prompt("Digite um número para verificar:"))
if (numeros.includes(numeroProcurado)) {
  numeros = numeros.filter((num) => num !== numeroProcurado)
  console.log("Número encontrado e removido. Novo vetor:", numeros)
} else {
  console.log("Número não encontrado no vetor.")
}
