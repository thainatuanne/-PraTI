const exemplo = {
  nome: "Carlos",
  idade: 28,
  curso: "Dev",
  ativo: true,
  cidade: "RJ",
};

function contarStrings(obj) {
  let count = 0;
  for (let chave in obj) {
    if (typeof obj[chave] === "string") count++;
  }
  return count;
}

console.log("Quantidade de strings:", contarStrings(exemplo));
