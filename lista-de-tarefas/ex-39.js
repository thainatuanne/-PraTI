const A = [];
const B = [];

for (let i = 0; i < 100; i++) {
  const num = Math.floor(Math.random() * 100) - 50; // -50 a 49
  A.push(num);
  if (num > 0) B.push(num);
}

console.log("Vetor compactado:", B);
