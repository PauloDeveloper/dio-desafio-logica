// Definindo variáveis
let nomeDoHeroi = "Paladino";
let quantidadeDeXP = 500; 

let nivelDoHeroi;

switch (quantidadeDeXP) {
  case quantidadeDeXP < 1000:
    nivelDoHeroi = "Ferro";
    break;
  case quantidadeDeXP < 500:
    nivelDoHeroi = "Intermediário";
    break;
  case quantidadeDeXP < 1000:
    nivelDoHeroi = "Avançado";
    break;
  case quantidadeDeXP >= 1000:
    nivelDoHeroi = "Mestre";
    break;
  default:
    nivelDoHeroi = "Nível não definido";
}

// Exibindo o resultado
console.log(`${nomeDoHeroi} está no nível ${nivelDoHeroi} com ${quantidadeDeXP} XP.`);
