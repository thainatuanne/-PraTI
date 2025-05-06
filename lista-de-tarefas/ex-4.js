const prompt = require("prompt-sync")();
const l1 = parseFloat(prompt("Segmento 1: "));
const l2 = parseFloat(prompt("Segmento 2: "));
const l3 = parseFloat(prompt("Segmento 3: "));

const formaTriangulo = l1 < l2 + l3 && l2 < l1 + l3 && l3 < l1 + l2;

if (!formaTriangulo) {
  console.log("Os segmentos informados não formam um triângulo.");
} else if (l1 === l2 && l2 === l3) {
  console.log("Triângulo Equilátero");
} else if (l1 === l2 || l1 === l3 || l2 === l3) {
  console.log("Triângulo Isósceles");
} else {
  console.log("Triângulo Escaleno");
}
