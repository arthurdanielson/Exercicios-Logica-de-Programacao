/*
78) Escreva um algoritmo que permita a leitura dos nomes de 10 pessoas e armaze os nomes lidos em
um vetor. Após isto, o algoritmo deve permitir a leitura de mais 1 nome qualquer de pessoa e depois
escrever a mensagem ACHEI, se o nome estiver entre os 10 nomes lidos anteriormente (guardados no
vetor), ou NÃO ACHEI caso contrário. 

Aluno: Arthur Danielson Viana
Data: 17/06/2024
*/

let nomes = []
for (let i = 0; i < 10; i++) {
  nomes.push(prompt("Digite o nome da pessoa " + (i + 1) + ":"))
}
let nomeProcurado = prompt("Digite um nome qualquer para procurar:")
if (nomes.includes(nomeProcurado)) {
  console.log("ACHEI")
} else {
  console.log("NÃO ACHEI")
}
