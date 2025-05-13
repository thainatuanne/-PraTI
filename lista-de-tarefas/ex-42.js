const dados = {
  nome: "João",
  idade: 25,
  interesses: ["música", "esportes"],
  notas: [8, 7, 9],
  ativo: true,
};

function filtrarArrays(obj) {
  const resultado = {};
  for (let chave in obj) {
    if (Array.isArray(obj[chave])) {
      resultado[chave] = obj[chave];
    }
  }
  return resultado;
}

console.log("Propriedades que são arrays:", filtrarArrays(dados));
