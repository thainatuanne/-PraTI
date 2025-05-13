const prompt = require("prompt-sync")();

const resultado = [];
for (let i = 0; i < 5; i++) {
  resultado.push(parseInt(prompt(`Número oficial ${i + 1}: `)));
}

for (let i = 1; i <= 50; i++) {
  const aposta = [];
  for (let j = 0; j < 5; j++) {
    aposta.push(Math.floor(Math.random() * 60));
  }

  const ganhou = aposta.every((num) => resultado.includes(num));
  if (ganhou) {
    console.log(`Apostador ${i}: Ganhador!`);
  }
}
