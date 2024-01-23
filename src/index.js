//Variavel
let nomeDoHeroi = "Paladino";
let quantidadeDeXP = 500; 

let nivelDoHeroi;

//Validação
switch (quantidadeDeXP) {
  
  case quantidadeDeXP >= 1001 && quantidadeDeXP <= 2000:
    nivelDoHeroi = "Bronze";
    break;
    case quantidadeDeXP >= 2001 && quantidadeDeXP <= 5000:
      nivelDoHeroi = "Prata";
    break;
    case quantidadeDeXP >= 6001 && quantidadeDeXP <= 7000:
      nivelDoHeroi = "Ouro";
    break;
    case quantidadeDeXP >= 7001 && quantidadeDeXP <= 8000:
      nivelDoHeroi = "Platina";
    break;
    case quantidadeDeXP >= 8001 && quantidadeDeXP <= 9000:
      nivelDoHeroi = "Ascendente";
    break;
    case quantidadeDeXP >= 9001 && quantidadeDeXP <= 10000:
      nivelDoHeroi = "Imortal";
    break;
    case quantidadeDeXP >= 10001 :
      nivelDoHeroi = "Radiante";
    break;
  default:
    nivelDoHeroi = "Bronze";
}

// Resultado
console.log(`${nomeDoHeroi} está no nível ${nivelDoHeroi} com ${quantidadeDeXP} XP.`);
