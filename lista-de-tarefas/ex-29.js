const matriz = [];
let somaLinha4 = 0,
  somaColuna2 = 0,
  somaDiagPrincipal = 0,
  somaTotal = 0;

for (let i = 0; i < 5; i++) {
  matriz[i] = [];
  for (let j = 0; j < 5; j++) {
    const valor = Math.floor(Math.random() * 10);
    matriz[i][j] = valor;
    if (i === 3) somaLinha4 += valor;
    if (j === 1) somaColuna2 += valor;
    if (i === j) somaDiagPrincipal += valor;
    somaTotal += valor;
  }
}

matriz.forEach((linha) => console.log(linha.join(" ")));
console.log("Soma linha 4:", somaLinha4);
console.log("Soma coluna 2:", somaColuna2);
console.log("Soma diagonal principal:", somaDiagPrincipal);
console.log("Soma total:", somaTotal);
