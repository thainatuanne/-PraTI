const prompt = require("prompt-sync")();
const numeroSecreto = Math.floor(Math.random() * 5) + 1;
const tentativa = parseInt(prompt("Adivinhe o número entre 1 e 5: "));

if (tentativa === numeroSecreto) {
  console.log("Parabéns! Você acertou.");
} else {
  console.log(`Errado. O número era ${numeroSecreto}. Tente novamente!`);
}
