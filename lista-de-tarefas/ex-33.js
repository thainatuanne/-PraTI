const M = [];
let somaSecundaria = 0;

for (let i = 0; i < 3; i++) {
  M[i] = [];
  for (let j = 0; j < 3; j++) {
    M[i][j] = Math.floor(Math.random() * 10);
    if (i + j === 2) somaSecundaria += M[i][j];
  }
}

const mediaSecundaria = somaSecundaria / 3;

console.log("Matriz original:");
M.forEach((linha) => console.log(linha.join(" ")));

console.log("\nDiagonal principal multiplicada pela média da secundária:");
for (let i = 0; i < 3; i++) {
  console.log((M[i][i] * mediaSecundaria).toFixed(2));
}
