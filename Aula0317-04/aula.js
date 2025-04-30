console.log('Hello World')

let name = 'James';
console.log(name)

var anotherName= 'Hyago';
console.log(anotherName)

// Exercício 2: verificar se um número é positivo, negativo ou zero

const num = Number(prompt("Digite um número:"));

if (num > 0) {
  console.log("O número é positivo.");
} else if (num < 0) {
  console.log("O número é negativo.");
} else {
  console.log("O número é zero.");
}

// Exercício 3: verificar se é bissexto

const ano = Number(prompt("Digite um ano:"));

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
  alert(`${ano} é um ano bissexto.`);
} else {
  alert(`${ano} não é um ano bissexto.`);
}


// Exercicio 4: definam faixas etárias para crianças, adolescentes e adultos e com switch apresentem na tela se a pessoa que informou a idade está em uma e qual a faixa etária

const idade = Number(prompt("Informe sua idade:"));
let faixaEtaria;

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

alert(`Você está na faixa etária de: ${faixaEtaria}`);
