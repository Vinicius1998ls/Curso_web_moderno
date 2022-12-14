function maiorEmenor(valores) {
    let maior = valores[0]
    let menor = valores[0]
    for(let i = 0; i < valores.length; i++) {
        if(maior < valores[i]) {
            maior = valores[i]
        }
        if(menor > valores[i]) {
            menor = valores[i]
        }        
    }
    console.log(`Menor valor ${menor}, maior valor ${maior}`)
}

let vetor = [1, 5, 48, 4, 6, 23, 50, 2]
maiorEmenor(vetor)

//Resposta

function maiorMenor (vetor) {
    let maior
    let menor
    for (let i = 0; i < vetor.length; i++){
        if (maior === undefined && menor === undefined){
            maior = vetor[i]
            menor = vetor[i]
        } else {
            if (vetor[i] > maior){
                maior = vetor[i]
            }
            if(vetor[i] < menor){
                menor = vetor[i]
            }
        }
    }
    return [maior, menor]
}

vetor =  [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]

console.log(maiorMenor(vetor))