/*
84) Faça um algoritmo para ler um valor N qualquer (que será o tamanho dos vetores). Após, ler dois
vetores A e B (de tamanho N cada um) e depois armazenar em um terceiro vetor Soma a soma dos
elementos do vetor A com os do vetor B (respeitando as mesmas posições) e escrever o vetor Soma. 

Aluno: Arthur Danielson Viana
Data: 17/06/2024
*/

let N = parseInt(prompt("Digite o tamanho dos vetores:"))
let A = []
let B = []
for (let i = 0; i < N; i++) {
  A.push(parseFloat(prompt("Digite um número para o vetor A[" + i + "]:")))
  B.push(parseFloat(prompt("Digite um número para o vetor B[" + i + "]:")))
}
let Soma = A.map((num, index) => num + B[index])
console.log("Vetor Soma:", Soma)
