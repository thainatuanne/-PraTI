const prompt = require("prompt-sync")();

function pesoIdeal(altura, sexo) {
  if (sexo === "M") return 72.7 * altura - 58;
  if (sexo === "F") return 62.1 * altura - 44.7;
  return null;
}

const altura = parseFloat(prompt("Digite a altura: "));
const sexo = prompt("Sexo (M/F): ").toUpperCase();
const resultado = pesoIdeal(altura, sexo);

if (resultado) {
  console.log(`Peso ideal: ${resultado.toFixed(2)} kg`);
} else {
  console.log("Sexo inválido.");
}
