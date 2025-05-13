function transformarObjeto(obj, funcao) {
  const resultado = {};
  for (let chave in obj) {
    resultado[chave] = funcao(obj[chave]);
  }
  return resultado;
}

const original = { a: 1, b: 2, c: 3 };
const dobrado = transformarObjeto(original, (x) => x * 2);

console.log("Original:", original);
console.log("Transformado:", dobrado);
