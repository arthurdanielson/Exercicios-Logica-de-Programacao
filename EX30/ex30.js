/*
30) Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordem
crescente. 

Aluno: Arthur Danielson Viana
Data: 14/06/2024
*/

let n1 = 1
let n2 = 3
let n3 = 2

if (n1 < n2 && n1 < n3 && n2 < n3) {
  console.log(n1, n2, n3)
} else if (n2 < n1 && n2 < n3 && n1 < n3) {
  console.log(n2, n1, n3)
} else if (n3 < n1 && n3 < n2 && n1 < n2) {
  console.log(n3, n1, n2)
} else if (n1 < n3 && n1 < n2 && n3 < n2) {
  console.log(n1, n3, n2)
} else if (n2 < n3 && n2 < n1 && n3 < n1) {
  console.log(n2, n3, n1)
} else {
  console.log(n3, n2, n1)
}
