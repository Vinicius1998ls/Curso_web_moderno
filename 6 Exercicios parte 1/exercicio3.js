function potencia(base, expoente) {
    console.log(Math.pow(base, expoente))
}

potencia(2, 3)

// Resposta

function expoente (base, expoente) {
    //Podemos fazer de 2 modos
    //Método antigo:
    let resultado = Math.pow(base, expoente)
    //Método novo:
    resultado = base ** expoente

    return resultado
}

console.log(expoente(2, 3))