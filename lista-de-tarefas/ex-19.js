const prompt = require("prompt-sync")();
const horarios = [];

function validarHorario(h, m, s) {
  return h >= 0 && h <= 23 && m >= 0 && m <= 59 && s >= 0 && s <= 59;
}

for (let i = 0; i < 5; i++) {
  let valido = false;
  while (!valido) {
    const hora = parseInt(prompt("Hora (0-23): "));
    const minuto = parseInt(prompt("Minuto (0-59): "));
    const segundo = parseInt(prompt("Segundo (0-59): "));
    if (validarHorario(hora, minuto, segundo)) {
      horarios.push(
        `${hora.toString().padStart(2, "0")}.${minuto
          .toString()
          .padStart(2, "0")}.${segundo.toString().padStart(2, "0")}`
      );
      valido = true;
    } else {
      console.log("Horário inválido. Tente novamente.");
    }
  }
}

console.log("Horários informados:");
console.log(horarios);
