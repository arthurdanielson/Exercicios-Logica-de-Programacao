/*
11) Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês,
mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele
efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas
vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do
vendedor.

Arthur Danielson Viana
13/06/2024
*/

let numCarrosVendidos = 2;
let valorTotalVendas = 100000;
let salarioFixo = 2000;
let comissao = 500;

let salarioFinal = salarioFixo + numCarrosVendidos * comissao + valorTotalVendas * 5 / 100;

console.log(salarioFinal);
