const A = [],
  B = [],
  P = [];

for (let i = 0; i < 3; i++) {
  A[i] = [];
  B[i] = [];
  P[i] = [];
  for (let j = 0; j < 5; j++) {
    A[i][j] = Math.floor(Math.random() * 10);
    B[i][j] = Math.floor(Math.random() * 10);
    P[i][j] = A[i][j] * B[i][j];
  }
}

console.log("Matriz Produto:");
P.forEach((linha) => console.log(linha.join(" ")));
