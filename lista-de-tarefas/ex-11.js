const prompt = require("prompt-sync")();
let soma = 0;
let menor = null;
let total = 0;
let pares = 0;

do {
  const num = parseInt(prompt("Digite um número: "));
  soma += num;
  total++;
  if (menor === null || num < menor) menor = num;
  if (num % 2 === 0) pares++;

  var continuar = prompt("Quer continuar? (S/N): ").toUpperCase();
} while (continuar === "S");

const media = soma / total;

console.log(`Somatório: ${soma}`);
console.log(`Menor valor: ${menor}`);
console.log(`Média: ${media.toFixed(2)}`);
console.log(`Total de pares: ${pares}`);
