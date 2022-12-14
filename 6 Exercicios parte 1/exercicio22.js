function valorTotalanuidade(mes, valor) {
    let totalComJuros = valor
    if (mes == 1) {
        return valor
    } else {
        for (let i = 1; i < mes; i++){
            totalComJuros = totalComJuros * 1.05 
        }
        return totalComJuros.toFixed(2)
    }
}

console.log(valorTotalanuidade(1, 100))
console.log(valorTotalanuidade(2, 100))
console.log(valorTotalanuidade(4, 100))
console.log(valorTotalanuidade(12, 100))
console.log(valorTotalanuidade(6, 350))

// Resposta

function calcularValor(mes, valor){
    if(mes > 0 && mes < 13) {
        atraso = mes - 1
        return (valor * ((1 + (5/100))**atraso)).toFixed(2)
    } else {
        return 'Mês inválido.'
    }
}

console.log(calcularValor(4, 100))