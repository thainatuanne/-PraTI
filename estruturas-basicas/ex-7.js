// Preço das maçãs

const quantidade = parseInt(prompt("Digite a quantidade de maçãs:"));
const preco = quantidade >= 12 ? 0.25 : 0.3;
const total = quantidade * preco;

console.log(`Total a pagar: R$ ${total.toFixed(2)}`);
