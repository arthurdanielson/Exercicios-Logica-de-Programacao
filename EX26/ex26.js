/*
26) Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e
quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade
média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual
a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar
compra'.

Arthur Danielson Viana
13/06/2024
*/

let qtdAtual = 1500;
let qtdMax = 3000;
let qtdMin = 200;
let qtdMedia = (qtdMax + qtdMin) / 2;

if (qtdAtual >= qtdMedia) {
  console.log("Não efeturar compra");
} else {
  console.log("Efetuar compra");
};