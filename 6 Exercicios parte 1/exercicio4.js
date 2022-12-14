function divisao1(dividendo, divisor) {
    console.log('Divisão', dividendo / divisor)
    console.log('Resto', dividendo % divisor)
}

divisao1(4, 2)
divisao1(9, 4)

// Resultado

function divisao2 (dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo/divisor));
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao2(11, 4)