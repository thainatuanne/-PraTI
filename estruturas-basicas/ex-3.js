// Menu com switch-case

const prompt = require("prompt-sync")();

const nota = parseFloat(prompt("Digite uma nota entre 0 e 10:"));

if (nota < 0 || nota > 10) {
  console.log("Nota inválida.");
} else if (nota >= 7) {
  console.log(`Nota ${nota}: Aprovado`);
} else if (nota >= 5) {
  console.log(`Nota ${nota}: Recuperação`);
} else {
  console.log(`Nota ${nota}: Reprovado`);
}
