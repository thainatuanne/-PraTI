const prompt = require("prompt-sync")();

const gabarito = Array.from({ length: 13 }, () =>
  Math.floor(Math.random() * 3)
); // 0, 1 ou 2
console.log("Gabarito:", gabarito);

for (let i = 1; i <= 100; i++) {
  let acertos = 0;
  const resposta = Array.from({ length: 13 }, () =>
    Math.floor(Math.random() * 3)
  );

  for (let j = 0; j < 13; j++) {
    if (resposta[j] === gabarito[j]) acertos++;
  }

  if (acertos === 13) {
    console.log(`Apostador ${i}: Parabéns, tu foi o GANHADOR!`);
  } else {
    console.log(`Apostador ${i}: ${acertos} acertos`);
  }
}
