// Tipo de triângulo

const a = parseFloat(prompt("Lado A:"));
const b = parseFloat(prompt("Lado B:"));
const c = parseFloat(prompt("Lado C:"));

if (a < b + c && b < a + c && c < a + b) {
  if (a === b && b === c) {
    console.log("Triângulo equilátero");
  } else if (a === b || a === c || b === c) {
    console.log("Triângulo isósceles");
  } else {
    console.log("Triângulo escaleno");
  }
} else {
  console.log("Os valores fornecidos não formam um triângulo");
}
