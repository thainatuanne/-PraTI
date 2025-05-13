const matriz = [];
const vetorNegativos = [];

for (let i = 0; i < 6; i++) {
  matriz[i] = [];
  let negativos = 0;
  for (let j = 0; j < 8; j++) {
    const valor = Math.floor(Math.random() * 21) - 10;
    matriz[i][j] = valor;
    if (valor < 0) negativos++;
  }
  vetorNegativos[i] = negativos;
}

console.log("Matriz:");
matriz.forEach((linha) => console.log(linha.join(" ")));
console.log("Quantidade de negativos por linha:", vetorNegativos);
