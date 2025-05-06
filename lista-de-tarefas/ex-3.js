const prompt = require("prompt-sync")();

const distancia = parseFloat(prompt("Qual a distância da viagem (em Km)? "));
const preco = distancia <= 200 ? 0.5 : 0.45;
const valorTotal = distancia * preco;

console.log(
  `O preço da passagem é R$ ${valorTotal.toFixed(2)} para ${distancia} Km.`
);