function contaAPagar(codigo, quantidade) {
    let totalConta = 0
    switch (codigo) {
        case 100:
            totalConta = quantidade * 3
            console.log(`valor a pagar ${totalConta.toFixed(2)}`)
            break
        case 200:
            totalConta = quantidade * 4
            console.log(`valor a pagar ${totalConta.toFixed(2)}`)
            break
        case 300:
            totalConta = quantidade * 5.5
            console.log(`valor a pagar ${totalConta.toFixed(2)}`)
            break
        case 400:
            totalConta = quantidade * 7.50
            console.log(`valor a pagar ${totalConta.toFixed(2)}`)
            break
        case 500:
            totalConta = quantidade * 3.50
            console.log(`valor a pagar ${totalConta.toFixed(2)}`)
            break
        case 600:
            totalConta = quantidade * 2.80
            console.log(`valor a pagar ${totalConta.toFixed(2)}`)
            break
        default:
            console.log(`produto não existente`)
            break
    }
}

contaAPagar(200, 4)
contaAPagar(500, 2)
contaAPagar(5465, 10)
contaAPagar(100, 3)
contaAPagar(300, 5)

// Resposta

function calcularVenda(codigoProduto, qtd) {
    switch (codigoProduto) {
        case 100:
            return qtd * 3
        case 200:
            return qtd * 4
        case 300:
            return qtd * 5.5
        case 400:
            return qtd * 7.5
        case 500:
            return qtd * 3.5
        case 600:
            return qtd * 2.8
        default:
            return 'Produto não existente.'
    }
}

console.log(calcularVenda(100, 2))
console.log(calcularVenda(200, 2))
console.log(calcularVenda(300, 2))
console.log(calcularVenda(400, 2))
console.log(calcularVenda(500, 2))
console.log(calcularVenda(600, 2))
console.log(calcularVenda(700, 2))