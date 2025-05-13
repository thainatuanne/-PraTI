const prompt = require("prompt-sync")();

const A = parseInt(prompt("Digite um valor A (para buscar na matriz): "));
const V = [];
let count = 0;
const X = [];

for (let i = 0; i < 30; i++) {
  V[i] = [];
  X[i] = [];
  for (let j = 0; j < 30; j++) {
    const num = Math.floor(Math.random() * 10);
    V[i][j] = num;
    if (num === A) count++;
    X[i][j] = num !== A ? num : null;
  }
}

console.log(`Quantidade de vezes que A aparece: ${count}`);
