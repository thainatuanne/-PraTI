// Classificação de idade

const prompt = require("prompt-sync")();

const idade = parseInt(prompt("Digite sua idade:"));
let categoria;

if (idade >= 0 && idade <= 12) {
  categoria = "Criança";
} else if (idade <= 17) {
  categoria = "Adolescente";
} else if (idade <= 59) {
  categoria = "Adulto";
} else if (idade >= 60) {
  categoria = "Idoso";
} else {
  categoria = "Idade inválida";
}

console.log(`Categoria: ${categoria}`);