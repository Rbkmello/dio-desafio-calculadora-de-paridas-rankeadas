// Modifique os valores para testar diferentes resultados
let resultado = calculadoraRankeadas(131, 30); 
console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} vitórias e está no nível ${resultado.nivel}`);

function calculadoraRankeadas(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel;

        // Classifica o nível com base no número de vitórias
        switch (true) {
        case vitorias < 10:
            nivel = "Ferro";
            break;
        case vitorias >= 11 && vitorias <= 20:
            nivel = "Bronze";
            break;
        case vitorias >= 21 && vitorias <= 50:
            nivel = "Prata";
            break;
        case vitorias >= 51 && vitorias <= 80:
            nivel = "Ouro";
            break;
        case vitorias >= 81 && vitorias <= 90:
            nivel = "Diamante";
            break;
        case vitorias >= 91 && vitorias <= 100:
            nivel = "Lendário";
            break;     
        case vitorias >= 101 && vitorias <= 150:
            nivel = "Imortal";
            break;       
        default:
            nivel = "Radiante";
        }
    
        // Retorna o saldo de vitórias e o nível
        return { saldoVitorias, nivel }; 
    }
  
  
