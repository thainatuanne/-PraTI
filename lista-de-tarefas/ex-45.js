const palavras = ["azul", "vermelho", "azul", "verde", "azul", "verde"];

const contagem = {};
for (let palavra of palavras) {
  contagem[palavra] = (contagem[palavra] || 0) + 1;
}

console.log("Contagem de palavras:", contagem);
