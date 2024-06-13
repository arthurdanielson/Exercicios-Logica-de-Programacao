/*
13) Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno.
Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média
final é:
                   n1 * 2 + n2 * 3 + n3 * 5
mediafinal = -----------------------------------
                              10 

Arthur Danielson Viana
13/06/2024
*/

let n1 = 9;
let n2 = 8;
let n3 = 10;

let mediaFinal = (n1 * 2 + n2 * 3 + n3 * 5) / 10;

console.log(mediaFinal);