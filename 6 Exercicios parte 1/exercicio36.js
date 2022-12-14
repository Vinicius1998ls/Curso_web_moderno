let numericos = [2.5, 6.2, 4.8, 3.1, 9.3]
let inteiros = [6, 1, 4, 9, 2]

function multiplicar(real, numeroInteiro){
    let resultado = []
    for(let i = 0; i < real.length; i++) {
        resultado[i] = real[i] * numeroInteiro[i]        
    }
    let resultado2 = multiplicarMaiorQueCinco(real, numeroInteiro)
    return `Resultado: ${resultado}, ${resultado2}`
}

function multiplicarMaiorQueCinco(real, numeroInteiro) {
    let outroResultado = []
    for(let i = 0; i < real.length; i++) {
        if(real > 5)
            outroResultado[i] = real[i] * numeroInteiro[i]        
    }
    return outroResultado 
}

console.log(multiplicar(numericos, inteiros))

//Resultado
let vetor = [1, 2, 3, 4, 5]

function multiplicaVetor(vetor, multiplicador){
    let vetorResultado = []
    vetor.forEach(elemento => {
        vetorResultado.push(elemento * multiplicador) 
    });

    return vetorResultado
}

console.log(multiplicaVetor(vetor, 3))