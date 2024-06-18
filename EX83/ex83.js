/*
83) Faça um algoritmo para ler 20 números e armazenar em um vetor. Após a leitura total dos 20
números, o algoritmo deve escrever esses 20 números lidos na ordem inversa.

Aluno: Arthur Danielson Viana
Data: 17/06/2024
*/

let numeros = []
for (let i = 0; i < 20; i++) {
  numeros.push(parseFloat(prompt("Digite um número:")))
}
console.log("Números na ordem inversa:", numeros.reverse())
