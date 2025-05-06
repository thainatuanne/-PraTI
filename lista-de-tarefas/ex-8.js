const prompt = require("prompt-sync")();
const horas = parseFloat(prompt("Quantas horas de atividade física no mês? "));
let pontos = 0;

if (horas <= 10) {
  pontos = horas * 2;
} else if (horas <= 20) {
  pontos = 10 * 2 + (horas - 10) * 5;
} else {
  pontos = 10 * 2 + 10 * 5 + (horas - 20) * 10;
}

const dinheiro = pontos * 0.05;

console.log(`Pontos acumulados: ${pontos}`);
console.log(`Dinheiro ganho: R$ ${dinheiro.toFixed(2)}`);
