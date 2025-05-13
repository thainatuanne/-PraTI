const obj1 = { nome: "Ana", idade: 22, cidade: "SP" };
const obj2 = { idade: 30, email: "ana@email.com" };

const combinado = { ...obj1, ...obj2 };
console.log("Objeto combinado:", combinado);
