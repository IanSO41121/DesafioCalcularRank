let vitorias = 500;
let derrotas = 0;
let saldoVitorias = vitorias - derrotas;
let nivel = "";

function calcularRank(){
    if(saldoVitorias <= 10){
        nivel = "Ferro";
        return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
    }else if((saldoVitorias >= 11) && (saldoVitorias <=20)){
        nivel = "Bronze";
        return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
    }else if((saldoVitorias >= 21) && (saldoVitorias <=50)){
        nivel = "Prata";
        return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
    }else if((saldoVitorias >= 51) && (saldoVitorias <=80)){
        nivel = "Ouro";
        return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
    }else if((saldoVitorias >= 81) && (saldoVitorias <=90)){
        nivel = "Damante";
        return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
    }else if((saldoVitorias >= 91) && (saldoVitorias <=100)){
        nivel = "Lendário";
        return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
    }else{
        nivel = "Imortal";
        return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
    }
}
console.log(calcularRank());