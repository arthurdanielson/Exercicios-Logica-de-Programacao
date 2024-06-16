/*
53) Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere 
que o N será sempre maior que ZERO. 

54)  Modifique o  exercício anterior para aceitar somente  valores maiores  que 0 para N. Caso o valor 
informado (para N) não seja maior que 0, deverá ser lido um novo valor para N. 

Aluno: Arthur Danielson Viana
Data: 16/06/2024
*/

let N = 100;

if (N <= 0) {
  console.log("VALOR INVÁLIDO!")
} else {
  for (let i = 1; i <= N; i++) {
    console.log(i)
  }
}