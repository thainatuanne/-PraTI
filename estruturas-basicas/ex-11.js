// Soma de 5 números

const prompt = require("prompt-sync")();

let soma = 0;

for (let i = 1; i <= 5; i++) {
  const num = parseFloat(prompt(`Digite o ${i}º número:`));
  soma += num;
}

console.log(`Soma total: ${soma}`);
