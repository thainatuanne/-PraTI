const fibonacci = [1, 1];

for (let i = 2; i < 15; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log("Vetor com 15 elementos da sequência de Fibonacci:");
console.log(fibonacci);
