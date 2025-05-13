const prompt = require("prompt-sync")();

const vetor = [];
for (let i = 0; i < 6; i++) {
  vetor.push(parseFloat(prompt(`Valor ${i + 1}: `)));
}

const opcao = parseInt(
  prompt("Operação (1-soma, 2-produto, 3-média, 4-ordenar, 5-mostrar): ")
);

switch (opcao) {
  case 1:
    console.log(
      "Soma:",
      vetor.reduce((a, b) => a + b, 0)
    );
    break;
  case 2:
    console.log(
      "Produto:",
      vetor.reduce((a, b) => a * b, 1)
    );
    break;
  case 3:
    console.log(
      "Média:",
      (vetor.reduce((a, b) => a + b, 0) / vetor.length).toFixed(2)
    );
    break;
  case 4:
    console.log(
      "Ordenado:",
      [...vetor].sort((a, b) => a - b)
    );
    break;
  case 5:
    console.log("Vetor:", vetor);
    break;
  default:
    console.log("Opção inválida.");
}
