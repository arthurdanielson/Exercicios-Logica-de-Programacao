/*
25) Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e
escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior
ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'. 

Arthur Danielson Viana
13/06/2024
*/

let numeroConta = 1452;
let saldo = 1500;
let debito = 1500;
let credito = 1500;
let saldoAtual = saldo - debito + credito;

console.log(`Saldo atual: $${saldoAtual.toFixed(2)}`);

if (saldoAtual >= 0) {
  console.log("Saldo Positivo");
} else {
  console.log("Saldo Negativo");
};

