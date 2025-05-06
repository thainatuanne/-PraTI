// Cálculo de IMC

const prompt = require("prompt-sync")();

const peso = parseFloat(prompt("Digite o peso em kg:"));
const altura = parseFloat(prompt("Digite a altura em metros:"));

if (peso > 0 && altura > 0) {
  const imc = peso / (altura * altura);
  let classificacao;

  if (imc < 18.5) classificacao = "Baixo peso";
  else if (imc < 25) classificacao = "Peso normal";
  else if (imc < 30) classificacao = "Sobrepeso";
  else classificacao = "Obesidade";

  console.log(`IMC: ${imc.toFixed(2)} - ${classificacao}`);
} else {
  console.log("Valores inválidos para peso ou altura.");
}
