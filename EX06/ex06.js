/*
6) Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular e escrever a
área do retângulo. 

Arthur Danielson Viana
12/06/2024
*/

let altura = document.querySelector("#in-altura");
let largura = document.querySelector("#in-largura");
let submit = document.querySelector("#btn-submit");
let reset = document.querySelector("#btn-reset");
let out = document.querySelector("#out");

submit.addEventListener("click", () => {
  let areaRetangulo = altura.value * largura.value;

  out.innerHTML = `Resultado: ${areaRetangulo}m2`;
});

reset.addEventListener("click", () => {
  altura.value = "";
  largura.value = "";
  out.innerHTML = "";
});