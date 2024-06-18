/*
82) Ler um vetor A de 10 números. Após, ler mais um número e guardar em uma variável X.
Armazenar em um vetor M o resultado de cada elemento de A multiplicado pelo valor X. Logo após,
imprimir o vetor M. 

Aluno: Arthur Danielson Viana
Data: 17/06/2024
*/

let A = []
for (let i = 0; i < 10; i++) {
  A.push(parseFloat(prompt("Digite um número para o vetor A[" + i + "]:")))
}
let X = parseFloat(prompt("Digite o valor de X:"))
let M = A.map((num) => num * X)
console.log("Vetor M:", M)
