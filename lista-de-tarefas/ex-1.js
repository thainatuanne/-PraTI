const prompt = require("prompt-sync")();

const cigarrosPorDia = parseInt(prompt("Quantos cigarros você fuma por dia? "));
const anosFumando = parseInt(prompt("Há quantos anos você fuma? "));

const totalCigarros = cigarrosPorDia * 365 * anosFumando;
const minutosPerdidos = totalCigarros * 10;
const diasPerdidos = minutosPerdidos / 60 / 24;

console.log(
  `Você perdeu aproximadamente ${diasPerdidos.toFixed(1)} dias de vida fumando.`
);
