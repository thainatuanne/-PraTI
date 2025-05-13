const prompt = require("prompt-sync")();
const matriz = [];
const vetor = [];

const A = parseInt(prompt("Digite o valor multiplicador: "));
let index = 0;

for (let i = 0; i < 6; i++) {
  matriz[i] = [];
  for (let j = 0; j < 6; j++) {
    const valor = Math.floor(Math.random() * 10);
    matriz[i][j] = valor;
    vetor[index++] = valor * A;
  }
}

console.log("Vetor com os valores multiplicados:", vetor);
