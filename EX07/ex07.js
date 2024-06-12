/*
7) Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade
dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.

Arthur Danielson Viana
12/06/2024
*/

let inAno = document.querySelector("#in-ano");
let inMes = document.querySelector("#in-mes");
let inDia = document.querySelector("#in-dia");
let out = document.querySelector("#out");
let btnSubmit = document.querySelector("#btn-submit");
let btnReset = document.querySelector("#btn-reset");

btnSubmit.addEventListener("click", () => {
  let ano = Number(inAno.value);
  let mes = Number(inMes.value);
  let dia = Number(inDia.value);
  let dias = (ano * 365) + (mes * 30) + dia;
  out.innerHTML = `Dias: ${dias}`;
});

btnReset.addEventListener("click", () => {
  inAno.value = "";
  inMes.value = "";
  inDia.value = "";
  out.innerHTML = "";
})