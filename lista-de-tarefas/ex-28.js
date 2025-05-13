const matriz = [];
let acima = 0,
  abaixo = 0;

for (let i = 0; i < 10; i++) {
  matriz[i] = [];
  for (let j = 0; j < 10; j++) {
    const valor = Math.floor(Math.random() * 10);
    matriz[i][j] = valor;
    if (j > i) acima += valor;
    if (i > j) abaixo += valor;
  }
}

console.log("Soma acima da diagonal principal:", acima);
console.log("Soma abaixo da diagonal principal:", abaixo);
