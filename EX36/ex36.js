/*
36) Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idades
dos homens serão sempre diferentes entre si, bem como as das mulheres). Calcule e escreva a soma
das idades do homem mais velho com a mulher mais nova, e o produto das idades do homem mais
novo com a mulher mais velha. 

Aluno: Arthur Danielson Viana
Data: 14/06/2024
*/

let idadeHomem1 = 30
let idadeHomem2 = 25
let idadeMulher1 = 20
let idadeMulher2 = 35

let homemMaisVelho = Math.max(idadeHomem1, idadeHomem2)
let homemMaisNovo = Math.min(idadeHomem1, idadeHomem2)
let mulherMaisVelha = Math.max(idadeMulher1, idadeMulher2)
let mulherMaisNova = Math.min(idadeMulher1, idadeMulher2)

console.log(homemMaisVelho + mulherMaisNova)
console.log(homemMaisNovo * mulherMaisVelha)
