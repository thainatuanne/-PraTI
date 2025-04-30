let listaFrutas = Array();
let listaNomes = ["giovana", "marilda"];

listaFrutas[0] = "maçã";
listaFrutas[1] = "morango";
listaFrutas["adocicadas"] = "pera";

for(let i = 0; i< listaFrutas.length; i++) {
    console.log(listaFrutas[i])
}

listaFrutas.push("melancia")  // add no final do array
listaFrutas.unshift("laranja") // add no inicio do array

listaFrutas.pop()
listaFrutas.shift()


console.log(listaFrutas);
console.log(listaFrutas["adocicadas"]);
console.log(listaNomes);


