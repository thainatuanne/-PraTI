const prompt = require("prompt-sync")();

let totalSalario = 0, totalFilhos = 0, maiorSalario = 0, abaixo350 = 0, pessoas = 0;

while (true) {
  const salario = parseFloat(prompt("Salário: "));
  const filhos = parseInt(prompt("Nº de filhos: "));
  if (salario > maiorSalario) maiorSalario = salario;
  if (salario <= 350) abaixo350++;
  totalSalario += salario;
  totalFilhos += filhos;
  pessoas++;

  const continuar = prompt("Deseja continuar? (S/N): ").toUpperCase();
  if (continuar !== "S") break;
}

console.log(`Média salarial: R$ ${(totalSalario / pessoas).toFixed(2)}`);
console.log(`Média de filhos: ${(totalFilhos / pessoas).toFixed(1)}`);
console.log(`Maior salário: R$ ${maiorSalario.toFixed(2)}`);
console.log(`% com salário até R$ 350: ${((abaixo350 / pessoas) * 100).toFixed(1)}%`);
