const prompt = require("prompt-sync")();
const funcionarios = [];

for (let i = 0; i < 80; i++) {
  const matricula = prompt("Matrícula: ");
  const nome = prompt("Nome: ");
  const salarioBruto = parseFloat(prompt("Salário bruto: "));
  const inss = salarioBruto * 0.12;
  const liquido = salarioBruto - inss;

  funcionarios.push({
    matricula,
    nome,
    salarioBruto,
    inss,
    liquido,
  });

  const continuar = prompt("Cadastrar outro? (S/N): ").toUpperCase();
  if (continuar !== "S") break;
}

console.log("Contracheques:");
for (const f of funcionarios) {
  console.log(
    `Matrícula: ${f.matricula}\nNome: ${
      f.nome
    }\nSalário bruto: R$ ${f.salarioBruto.toFixed(
      2
    )}\nDedução INSS: R$ ${f.inss.toFixed(
      2
    )}\nSalário líquido: R$ ${f.liquido.toFixed(2)}\n`
  );
}
