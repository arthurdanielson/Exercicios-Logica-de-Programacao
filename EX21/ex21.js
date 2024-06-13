/*
21) Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os
minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é
de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte. 

Arthur Danielson Viana
13/06/2024
*/

let horaInicio = 14;
let horaFim = 16;

let duracao = horaFim - horaInicio;

if (duracao >= 24) {
  console.log("tempo excedido");
} else {
  console.log(duracao);
};