// Média de decimais até 0

const prompt = require("prompt-sync")();

let soma = 0;
let count = 0;
let entrada;

do {
  entrada = parseFloat(prompt("Digite um número decimal (0 para sair):"));
  if (entrada !== 0) {
    soma += entrada;
    count++;
  }
} while (entrada !== 0);

if (count > 0) {
  const media = soma / count;
  console.log(`Média: ${media.toFixed(2)}`);
} else {
  console.log("Nenhum valor válido foi inserido.");
}
