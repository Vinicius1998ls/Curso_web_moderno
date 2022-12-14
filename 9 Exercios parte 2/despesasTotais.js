function despesasTotais(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += array[i].preco
    }
    return total.toFixed(2)
}

console.log(despesasTotais([
    {nome: "Jornal online", categoria: "informação", preco: 89.90 },
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
]))

console.log(despesasTotais([
    {nome: "Galaxy S20", categoria: "Eletronico", preco: 3599.99 },
    {nome: "Macbook pro", categoria: "Eletronico", preco: 30999.90}
]))