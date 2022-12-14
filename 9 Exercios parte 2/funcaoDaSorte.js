function sorteio(numero) {
    const aleatorio = (min,  max) => Math.floor(Math.random() * (max - min) + min)
    numeroSorteado = aleatorio(1, 11)
    if (numeroSorteado == numero) {
        return `Parabens! o numero sorteado foi ${numeroSorteado}`
    } else {
        return `Que pena! o numero sorteado foi ${numeroSorteado}`
    }
}

console.log(sorteio(10))
console.log(sorteio(3))
console.log(sorteio(1))