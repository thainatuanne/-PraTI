const prompt = require("prompt-sync")();
const tipo = prompt("Tipo do carro (popular/luxo): ").toLowerCase();
const dias = parseInt(prompt("Quantos dias de aluguel? "));
const km = parseFloat(prompt("Quantos Km foram percorridos? "));
let precoTotal = 0;

if (tipo === "popular") {
  precoTotal = dias * 90 + (km <= 100 ? km * 0.2 : km * 0.1);
} else if (tipo === "luxo") {
  precoTotal = dias * 150 + (km <= 200 ? km * 0.3 : km * 0.25);
} else {
  console.log("Tipo de carro inválido.");
}

if (precoTotal > 0) {
  console.log(`Total a pagar: R$ ${precoTotal.toFixed(2)}`);
}
