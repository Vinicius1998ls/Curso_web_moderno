const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'copo de plastico', preco: 18.99, fragil: false },
]

console.log(produtos.filter(function(p) {
    return false
}))

const caro = produtos => produtos.preco >= 500
const ehFragil = produtos => produtos.fragil

console.log(produtos.filter(caro).filter(ehFragil))