const prompt = require("prompt-sync")();

const gabarito = Array.from(
  { length: 20 },
  () => ["A", "B", "C", "D"][Math.floor(Math.random() * 4)]
);
console.log("Gabarito:", gabarito);

for (let i = 1; i <= 50; i++) {
  const respostas = Array.from(
    { length: 20 },
    () => ["A", "B", "C", "D"][Math.floor(Math.random() * 4)]
  );
  let acertos = 0;

  for (let j = 0; j < 20; j++) {
    if (respostas[j] === gabarito[j]) acertos++;
  }

  const status = acertos >= 12 ? "APROVADO" : "REPROVADO";
  console.log(`Aluno ${i}: ${acertos} acertos - ${status}`);
}
