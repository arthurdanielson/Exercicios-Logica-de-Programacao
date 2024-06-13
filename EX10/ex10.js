/*
10) O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do
distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor
seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro,
calcular e escrever o custo final ao consumidor.

Arthur Danielson Viana
12/06/2024
*/

let custoDeFabrica = 1000;
let porcentagemDistribuidor = 28;
let impostos = 45;

let custoFinal = custoDeFabrica + (custoDeFabrica * porcentagemDistribuidor / 100) + (custoDeFabrica * impostos / 100);

console.log(custoFinal);