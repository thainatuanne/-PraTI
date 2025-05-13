const prompt = require("prompt-sync")();
const nomes = [],
  idades = [];

for (let i = 0; i < 9; i++) {
  nomes.push(prompt(`Nome da pessoa ${i + 1}: `));
  idades.push(parseInt(prompt("Idade: ")));
}

console.log("Pessoas menores de idade:");
for (let i = 0; i < 9; i++) {
  if (idades[i] < 18) {
    console.log(`${nomes[i]} - ${idades[i]} anos`);
  }
}
