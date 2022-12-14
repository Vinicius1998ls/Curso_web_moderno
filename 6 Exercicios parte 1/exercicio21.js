function valorASerPago(idade) {
    if (idade <= 10) {
        return 100 + 80
    } else if(idade > 10 && idade < 30) {
        return 100 + 50
    } else if(idade > 30 && idade < 60) {
        return 100 + 95
    } else {
        return 100 + 130
    }
}

console.log(valorASerPago(6))
console.log(valorASerPago(15))
console.log(valorASerPago(42))
console.log(valorASerPago(140))

// Resposta

function calcularPreco (idade) {
    if(idade < 10){
        return 180
    } else if(idade < 30) {
        return 150
    } else if (idade < 60) {
        return 195
    } else {
        return 230
    }
}

console.log(calcularPreco(8));
console.log(calcularPreco(15));
console.log(calcularPreco(35));
console.log(calcularPreco(52));
console.log(calcularPreco(80));