function calculo(a, b) {
    let soma = a + b
    console.log(`Soma ${soma}` )

    let subtracao = a - b
    console.log(`Subtração ${subtracao}`)

    let multiplicacao = a * b
    console.log(`Multiplicação ${multiplicacao}`)

    let divisao = a / b
    console.log(`Divisão ${divisao}`)    
}

calculo(8, 20)

// Resposta correta
function calcularOperacoes (operador1, operador2) {
    console.log(operador1+operador2, operador1-operador2, operador1*operador2, operador1/operador2);
}

calcularOperacoes(1, 2)