// Menu interativo com switch-case

const prompt = require("prompt-sync")();

function exibirMenu() {
  const opcao = prompt(
    "Escolha uma opção:\n1 - Perfil\n2 - Configurações\n3 - Encerrar\n"
  );

  switch (opcao) {
    case "1":
      console.log("Perfil carregado com sucesso.");
      break;
    case "2":
      console.log("Abrindo configurações...");
      break;
    case "3":
      console.log("Aplicação encerrada.");
      break;
    default:
      console.log("Opção inválida.");
  }
}

exibirMenu();

