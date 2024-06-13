/*
18) Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela
poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu). 

Arthur Danielson Viana
13/06/2024
*/

let anoAtual = 2024;
let anoNascimento = 2007;

if (anoAtual - anoNascimento >= 16) {
  console.log("apto para votar");
} else {
  console.log("inapto para votar");
};