/*
24) Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que
ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que
ultrapassar este valor, calcular e escrever o seu salário total. 

Arthur Danielson Viana
13/06/2024
*/

let salarioFixo = 1000.00;
let valorVendas = 1600.00;
let comissao5 = valorVendas - 1500.00;
let salarioTotal;

if (comissao5 > 0) {
  salarioTotal = salarioFixo + 1500 * 0.03 + comissao5 * 0.05;
} else {
  salarioTotal = salarioFixo + valorVendas * 0.03;
};

console.log(`R$${salarioTotal.toFixed(2)}`);