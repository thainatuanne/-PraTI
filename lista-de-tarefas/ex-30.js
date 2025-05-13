const matriz = [],
  SL = Array(5).fill(0),
  SC = Array(5).fill(0);

for (let i = 0; i < 5; i++) {
  matriz[i] = [];
  for (let j = 0; j < 5; j++) {
    const valor = Math.floor(Math.random() * 10);
    matriz[i][j] = valor;
    SL[i] += valor;
    SC[j] += valor;
  }
}

console.log("Matriz:");
matriz.forEach((linha) => console.log(linha.join(" ")));
console.log("Somas das Linhas:", SL);
console.log("Somas das Colunas:", SC);
