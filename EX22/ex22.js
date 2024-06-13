/*
22) A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais
de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%.
Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva
o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas
(considere que o mês possua 4 semanas exatas). 

Arthur Danielson Viana
13/06/2024
*/

let horasTrabalhadas = 161;
let salarioHora = 8;
let horasExtras = horasTrabalhadas - 160;
let salarioTotal = 160 * salarioHora + horasExtras * (salarioHora * 1.5);

console.log(`R$${salarioTotal.toFixed(2)}`);