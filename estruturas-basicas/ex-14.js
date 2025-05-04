// Fatorial

const numero = parseInt(prompt("Digite um número para calcular o fatorial:"));
let resultado = 1;
let i = numero;

while (i > 1) {
  resultado *= i;
  i--;
}

console.log(`Fatorial de ${numero} é ${resultado}`);
