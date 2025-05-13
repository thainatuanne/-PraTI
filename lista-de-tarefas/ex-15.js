const prompt = require("prompt-sync")();
const numeros = [];

for (let i = 0; i < 10; i++) {
  numeros.push(parseInt(prompt(`Digite o número ${i + 1}: `)));
}

console.log("Números pares e suas posições:");
numeros.forEach((num, i) => {
  if (num % 2 === 0) {
    console.log(`Valor: ${num}, Posição: ${i}`);
  }
});
