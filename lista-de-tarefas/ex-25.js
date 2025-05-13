const matriz = [];
const colSoma = Array(20).fill(0);

for (let i = 0; i < 15; i++) {
  matriz[i] = [];
  for (let j = 0; j < 20; j++) {
    const valor = Math.floor(Math.random() * 10);
    matriz[i][j] = valor;
    colSoma[j] += valor;
  }
}

console.log("Soma de cada coluna:");
colSoma.forEach((soma, i) => console.log(`Coluna ${i + 1}: ${soma}`));
