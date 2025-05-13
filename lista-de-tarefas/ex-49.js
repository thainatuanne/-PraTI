const transacoes = [
  { id: 1, valor: 100, data: "2023-01-01", categoria: "Alimentação" },
  { id: 2, valor: 50, data: "2023-01-02", categoria: "Transporte" },
  { id: 3, valor: 80, data: "2023-01-03", categoria: "Alimentação" },
];

const resultado = {};

for (let t of transacoes) {
  if (!resultado[t.categoria]) {
    resultado[t.categoria] = { subtotal: 0, transacoes: [] };
  }
  resultado[t.categoria].subtotal += t.valor;
  resultado[t.categoria].transacoes.push(t);
}

console.log("Resumo por categoria:", resultado);
