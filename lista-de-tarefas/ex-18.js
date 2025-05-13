const prompt = require("prompt-sync")();

const funcionario = {
  nome: prompt("Nome: "),
  cargo: prompt("Cargo: "),
  salario: parseFloat(prompt("Salário: ")),
};

console.log("Dados do funcionário:");
console.log(funcionario);
