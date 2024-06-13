/*
8) Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos
brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total
de eleitores. 

Arthur Danielson Viana
12/06/2024
*/

let totalVotos = 100;
let votosBrancos = 10;
let votosNulos = 5;
let votosValidos = 75;

let percentualBrancos = totalVotos * votosBrancos / 100;
let percentualNulos = totalVotos * votosNulos / 100;
let percentualValidos = totalVotos * votosValidos / 100;

console.log(`Brancos: ${percentualBrancos}%
Nulos: ${percentualNulos}%
Válidos: ${percentualValidos}%`);