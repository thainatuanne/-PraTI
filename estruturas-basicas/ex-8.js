// Ordem crescente

const prompt = require("prompt-sync")();

const valor1 = parseFloat(prompt("Digite o primeiro valor:"));
const valor2 = parseFloat(prompt("Digite o segundo valor:"));

if (valor1 === valor2) {
  console.log("Os valores devem ser diferentes.");
} else {
  const ordenados = [valor1, valor2].sort((a, b) => a - b);
  console.log(`Ordem crescente: ${ordenados[0]}, ${ordenados[1]}`);
}
