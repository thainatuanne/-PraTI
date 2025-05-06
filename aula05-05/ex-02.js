let numeros = [3, 6, 1, 2, -3];
let n = numeros.length;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - 1; j++) {
    if (numeros[j] > numeros[j + 1]) {
        let temp = numeros[j + 1]
        numeros[j] = numeros [j + 1]
        numeros[j + 1] = temp;
    }
  }
}

console.log(numeros);

// bubble sort