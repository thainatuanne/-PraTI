const prompt = require("prompt-sync")();
let totalHomens = 0;
let totalMulheres = 0;

while (true) {
  const salario = parseFloat(prompt("Salário: "));
  const sexo = prompt("Sexo (M/F): ").toUpperCase();

  if (sexo === "M") totalHomens += salario;
  else if (sexo === "F") totalMulheres += salario;

  const continuar = prompt("Deseja continuar? (S/N): ").toUpperCase();
  if (continuar !== "S") break;
}

console.log(`Total pago aos homens: R$ ${totalHomens.toFixed(2)}`);
console.log(`Total pago às mulheres: R$ ${totalMulheres.toFixed(2)}`);
