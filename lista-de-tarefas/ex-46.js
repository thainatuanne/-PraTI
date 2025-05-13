const vendas = [
  { vendedor: "Ana", valor: 100 },
  { vendedor: "João", valor: 200 },
  { vendedor: "Ana", valor: 300 },
  { vendedor: "Maria", valor: 150 },
];

const totais = {};
for (let venda of vendas) {
  totais[venda.vendedor] = (totais[venda.vendedor] || 0) + venda.valor;
}

console.log("Total de vendas por vendedor:", totais);
