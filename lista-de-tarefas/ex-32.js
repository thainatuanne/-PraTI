const M = [];

for (let i = 0; i < 12; i++) {
  M[i] = [];
  for (let j = 0; j < 13; j++) {
    M[i][j] = Math.floor(Math.random() * 100 - 50); // valores entre -50 e 49
  }
}

const MModificada = M.map((linha) => {
  const maiorModulo = Math.max(...linha.map(Math.abs));
  return linha.map((val) => (val / maiorModulo).toFixed(2));
});

console.log("Matriz original:");
M.forEach((linha) => console.log(linha.join(" ")));
console.log("\nMatriz modificada:");
MModificada.forEach((linha) => console.log(linha.join(" ")));
