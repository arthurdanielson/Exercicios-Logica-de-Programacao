/*
38) Faça um algoritmo para ler um número que é um código de usuário. Caso este código seja
diferente de um código armazenado internamente no algoritmo (igual a 1234) deve ser apresentada a
mensagem ‘Usuário inválido!’. Caso o Código seja correto, deve ser lido outro valor que é a senha. Se
esta senha estiver incorreta (a certa é 9999) deve ser mostrada a mensagem ‘senha incorreta’. Caso a
senha esteja correta, deve ser mostrada a mensagem ‘Acesso permitido’.

Aluno: Arthur Danielson Viana
Data: 14/06/2024
*/

let usuarioSistema = 1234
let senhaSistema = 9999
let usuarioEntrada = 1235
let senhaEntrada = 9999

if (usuarioEntrada == usuarioSistema) {
  if (senhaEntrada == senhaSistema) {
    console.log("Acesso permitido")
  } else {
    console.log("Senha incorreta!")
  }
} else {
  console.log("Usuário inválido!")
}