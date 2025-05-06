const prompt = require("prompt-sync")();
const opcoes = ["pedra", "papel", "tesoura"];
const jogador = prompt("Escolha pedra, papel ou tesoura: ").toLowerCase();
const computador = opcoes[Math.floor(Math.random() * 3)];

console.log(`Você: ${jogador} | Computador: ${computador}`);

if (jogador === computador) {
  console.log("Empate!");
} else if (
  (jogador === "pedra" && computador === "tesoura") ||
  (jogador === "papel" && computador === "pedra") ||
  (jogador === "tesoura" && computador === "papel")
) {
  console.log("Você venceu!");
} else if (opcoes.includes(jogador)) {
  console.log("Você perdeu!");
} else {
  console.log("Jogada inválida.");
}
