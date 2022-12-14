function calcular(a, b, c) {
    switch(b) {
        case '+':
            return a + c
        case '-':
            return a - c
        case '*': 
            return a * c
        case '/':
            return a / c
        default:
            return "operação invalida"
    }
}

console.log(calcular(2, '+', 2))
console.log(calcular(4, '-', 2))
console.log(calcular(2, '*', 3))
console.log(calcular(10, '/', 2))
console.log(calcular(2, '&', 20))

// Resposta

function calculadora (valor1, operacao, valor2) {
    switch (operacao) {
        case '+':
            return valor1 + valor2
        case '-':
            return valor1 - valor2
        case '*':
            return valor1 * valor2
        case '/':
            return valor1 / valor2
        default:
            return 'Operação inválida'
    }
}

console.log(calculadora(2, '+', 3));
console.log(calculadora(2, '-', 3));
console.log(calculadora(2, '*', 3));
console.log(calculadora(2, '/', 3));
console.log(calculadora(2, 'a', 3));