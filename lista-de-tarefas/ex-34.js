const M = [];

for (let i = 0; i < 50; i++) {
  M[i] = [];
  for (let j = 0; j < 50; j++) {
    M[i][j] = Math.floor(Math.random() * 10);
  }
}

for (let i = 0; i < 50; i++) {
  const multiplicador = M[i][i];
  for (let j = 0; j < 50; j++) {
    M[i][j] *= multiplicador;
  }
}

console.log("Matriz modificada:");
console.log(M.map((linha) => linha.join(" ")).join("\n"));
