const prompt = require("prompt-sync")();

let pares = [],
  impares = [];

for (let i = 0; i < 30; i++) {
  const valor = parseInt(prompt(`Digite o valor ${i + 1}: `));
  if (valor % 2 === 0) pares.push(valor);
  else impares.push(valor);

  if (pares.length === 5) {
    console.log("Vetor de pares cheio:", pares);
    pares = [];
  }

  if (impares.length === 5) {
    console.log("Vetor de ímpares cheio:", impares);
    impares = [];
  }
}

if (pares.length > 0) console.log("Restantes pares:", pares);
if (impares.length > 0) console.log("Restantes ímpares:", impares);
