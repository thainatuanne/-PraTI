// Repetir número 10 vezes

const prompt = require("prompt-sync")();

const numero = parseInt(prompt("Digite um número:"));

for (let i = 0; i < 10; i++) {
  console.log(`Repetição ${i + 1}: ${numero}`);
}
