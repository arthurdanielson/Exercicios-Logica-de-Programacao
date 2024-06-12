/*
8) Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos
brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total
de eleitores. 

Arthur Danielson Viana
12/06/2024
*/

let inTotal = document.querySelector("#in-total");
let inBranco = document.querySelector("#in-branco");
let inNulo = document.querySelector("#in-nulo");
let inValido = document.querySelector("#in-valido");
let out = document.querySelector("#out");
let btnSubmit = document.querySelector("#btn-submit");
let btnReset = document.querySelector("#btn-reset");

btnSubmit.addEventListener("click", () => {
  let percentualBranco = (inBranco.value / inTotal.value) * 100;
  let percentualNulo = (inNulo.value / inTotal.value) * 100;
  let percentualValido = (inValido.value / inTotal.value) * 100;
  out.innerHTML = `
  Branco: ${percentualBranco.toFixed(2)}%<br>
  Nulo: ${percentualNulo.toFixed(2)}%<br>
  Válido: ${percentualValido.toFixed(2)}%`;
});

btnReset.addEventListener("click", () => {
  inTotal.value = "";
  inBranco.value = "";
  inNulo.value = "";
  inValido.value = "";
  out.innerHTML = "";
})