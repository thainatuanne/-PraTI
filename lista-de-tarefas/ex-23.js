const matriz = [];

for (let i = 0; i < 7; i++) {
  matriz[i] = [];
  for (let j = 0; j < 7; j++) {
    matriz[i][j] = i === j ? 1 : 0;
  }
}

matriz.forEach((linha) => console.log(linha.join(" ")));
