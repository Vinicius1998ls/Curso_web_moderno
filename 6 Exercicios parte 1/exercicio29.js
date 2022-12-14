function dentroEfora(numeros) {
    let dentro = 0;
    let fora = 0;
    for(let i = 0; i < numeros.length; i++) {
        if(numeros[i] >= 10 && numeros[i] <= 20) {
            dentro++
        }else {
            fora++    
        }
    }
    console.log(`Total dentro: ${dentro}, total fora: ${fora}`)
}

let vetor = [20, 30, 15, 2, 14, 16, 30]
dentroEfora(vetor)

//Resposta
function observarIntervalo (vetor) {
    qtdNumerosNoIntervalo = 0
    for (let i = 0; i < vetor.length; i++) {
        if(vetor[i] >= 10 && vetor[i] <= 20){
            qtdNumerosNoIntervalo++
        }
    }
    return `${qtdNumerosNoIntervalo} números dentro do intervalo.`
}

vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]

console.log(observarIntervalo(vetor))