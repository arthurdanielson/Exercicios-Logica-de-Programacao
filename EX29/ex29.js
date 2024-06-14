/*
29) Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2
maiores. 

Arthur Danielson Viana
14/06/2024
*/

let n1 = 7
let n2 = 10
let n3 = 4

if (n1 > n3 && n2 > n3) {
  console.log(n1 + n2)
} else if (n1 > n2 && n3 > n2) {
  console.log(n1 + n3)
} else {
  console.log(n2 + n3)
}
