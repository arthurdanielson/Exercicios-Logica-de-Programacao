/*
17) Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever
uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o
aluno é aprovado). Escrever também a média calculada.

Arthur Danielson Viana
13/06/2024
*/

let n1 = 2;
let n2 = 10;
let mediaFinal = (n1 + n2) / 2;

if (mediaFinal >= 6) {
  console.log("aprovado");
} else {
  console.log("reprovado");
};

console.log(`média: ${mediaFinal.toFixed(2)}`);