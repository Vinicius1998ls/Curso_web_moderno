function filtrarPorQuantidadeDeDigitos(numeros, quantidadeDesejada) { 
    let resultado = []
    for(numero of numeros) {
        const quantidadeDeDigitos = String(numero).length // transforma em string e conta a quantidade e passa para constante
        if(quantidadeDeDigitos === quantidadeDesejada) // se o valor da constante for igual o da informada ele coloca para dentro do aaray resultado
        resultado.push(numero) 
    }  
        return resultado 
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))