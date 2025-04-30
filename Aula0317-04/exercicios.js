//Exercício 2: verificar se um número é positivo, negativo ou zero
//Exercício 3: verificar é bissexto
//Exércicio 4: definam faixas etárias para crianças, adolescentes e adultos e com switch apresentem na tela se a pessoa que informou a idade está em uma e qual a faixa etária

const prompt = require("prompt-sync")();

console.log("===== MENU DE EXERCÍCIOS =====");
console.log("1 - Verificar se um número é positivo, negativo ou zero");
console.log("2 - Verificar se o ano é bissexto");
console.log("3 - Verificar faixa etária");
console.log("==============================");

const opcao = prompt("Escolha uma opção (1, 2 ou 3): ");

console.log("\n");

switch (opcao) {
  case "1":
    // Exercício 2
    const numero = Number(prompt("Digite um número: "));
    if (numero > 0) {
      console.log("O número é positivo.");
    } else if (numero < 0) {
      console.log("O número é negativo.");
    } else {
      console.log("O número é zero.");
    }
    break;

  case "2":
    // Exercício 3
    const ano = Number(prompt("Digite o ano para verificar se é bissexto: "));
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
      console.log(ano + " é um ano bissexto.");
    } else {
      console.log(ano + " não é um ano bissexto.");
    }
    break;

  case "3":
    // Exercício 4
    const idade = Number(prompt("Digite sua idade: "));
    let faixaEtaria = "";

    switch (true) {
      case idade >= 0 && idade <= 12:
        faixaEtaria = "criança";
        break;
      case idade >= 13 && idade <= 17:
        faixaEtaria = "adolescente";
        break;
      case idade >= 18:
        faixaEtaria = "adulto";
        break;
      default:
        faixaEtaria = "idade inválida";
    }

    console.log(`Você está na faixa etária de: ${faixaEtaria}`);
    break;

  default:
    console.log("Opção inválida. Tente novamente.");
}
