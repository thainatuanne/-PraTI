// Verifica se número é par ou ímpar

const prompt = require("prompt-sync")();

function ehParOuImpar(n) {
  if (!Number.isInteger(n)) return "Entrada inválida.";
  return n % 2 === 0 ? `O número ${n} é par.` : `O número ${n} é ímpar.`;
}

const numero = parseInt(prompt("Digite um número inteiro:"));
console.log(ehParOuImpar(numero));
