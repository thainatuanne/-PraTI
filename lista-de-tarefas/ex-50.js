const prompt = require("prompt-sync")();
let hoteis = [],
  reservas = [];
let idReserva = 1;

function adicionarHotel() {
  const nome = prompt("Nome do hotel: ");
  const cidade = prompt("Cidade: ");
  const quartos = parseInt(prompt("Nº total de quartos: "));
  hoteis.push({
    id: hoteis.length + 1,
    nome,
    cidade,
    quartosTotais: quartos,
    quartosDisponiveis: quartos,
  });
}

function buscarPorCidade() {
  const cidade = prompt("Buscar por cidade: ");
  const encontrados = hoteis.filter(
    (h) => h.cidade.toLowerCase() === cidade.toLowerCase()
  );
  console.log("Hotéis encontrados:", encontrados);
}

function fazerReserva() {
  const idHotel = parseInt(prompt("ID do hotel para reserva: "));
  const hotel = hoteis.find((h) => h.id === idHotel);
  if (!hotel || hotel.quartosDisponiveis <= 0)
    return console.log("Reserva indisponível.");
  const nomeCliente = prompt("Nome do cliente: ");
  reservas.push({ idReserva: idReserva++, idHotel, nomeCliente });
  hotel.quartosDisponiveis--;
  console.log("Reserva realizada com sucesso.");
}

function cancelarReserva() {
  const id = parseInt(prompt("ID da reserva: "));
  const reserva = reservas.find((r) => r.idReserva === id);
  if (!reserva) return console.log("Reserva não encontrada.");
  const hotel = hoteis.find((h) => h.id === reserva.idHotel);
  hotel.quartosDisponiveis++;
  reservas = reservas.filter((r) => r.idReserva !== id);
  console.log("Reserva cancelada.");
}

function listarReservas() {
  for (let r of reservas) {
    const hotel = hoteis.find((h) => h.id === r.idHotel);
    console.log(
      `Reserva #${r.idReserva} - Cliente: ${r.nomeCliente}, Hotel: ${hotel.nome}, Cidade: ${hotel.cidade}`
    );
  }
}

// Menu
while (true) {
  console.log(
    "\n1-Adicionar hotel\n2-Buscar por cidade\n3-Reservar\n4-Cancelar\n5-Listar reservas\n6-Sair"
  );
  const opcao = prompt("Escolha: ");
  if (opcao === "1") adicionarHotel();
  else if (opcao === "2") buscarPorCidade();
  else if (opcao === "3") fazerReserva();
  else if (opcao === "4") cancelarReserva();
  else if (opcao === "5") listarReservas();
  else if (opcao === "6") break;
  else console.log("Opção inválida.");
}
