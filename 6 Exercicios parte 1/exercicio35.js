let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

function juntarPilha (pilha1, pilha2) {
    let pilha = pilha1.concat(pilha2)
    return pilha
}

console.log(juntarPilha(vetorPilha, vetorAdiciona))