const prompt = require("prompt-sync")();

const velocidade = parseFloat(prompt("Digite a velocidade do carro (Km/h): "));
const limite = 80;

if (velocidade > limite) {
  const excesso = velocidade - limite;
  const multa = excesso * 5;
  console.log(
    `Você foi multado em R$ ${multa.toFixed(
      2
    )} por exceder o limite em ${excesso} Km/h.`
  );
} else {
  console.log("Velocidade dentro do permitido. Dirija com segurança!");
}
