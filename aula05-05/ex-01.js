let numeros = [];
for (let i =0; i< 10; i++) {
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    numeros.push(numeroAleatorio)
}

let soma = numeros.reduce((acc, num) => acc + num, 0);

let media = soma / numeros.length;

let pares = numeros.filter(num => num % 2 === 0);


console.log(`Array original: ${numeros}`);
console.log(`Soma: ${soma}`);
console.log(`Média: ${media.toFixed(2)}`);
console.log(`Numeros pares: ${pares}`);
