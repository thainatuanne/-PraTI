const inventarioLojaA = { caneta: 10, lápis: 20 };
const inventarioLojaB = { lápis: 15, borracha: 5 };

const combinado = { ...inventarioLojaA };

for (let item in inventarioLojaB) {
  combinado[item] = (combinado[item] || 0) + inventarioLojaB[item];
}

console.log("Inventário combinado:", combinado);
