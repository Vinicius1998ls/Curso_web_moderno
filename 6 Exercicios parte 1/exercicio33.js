/*let vetInteiro = [2, 4, 3, 50]
let VetString = ['casa', 'carro', 'celular', 'agua']
let vetDouble = [2.34, 5.40, 4.90, 9.34]

function juntarVetores(a, b, c) {
    let novoVetor = concat(vetInteiro, VetString, vetDouble)
    console.log(novoVetor)
}

juntarVetores(vetInteiro, VetString, vetDouble) */
// Resposta

let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['Arthur', 'Christian', 'Yuri', 'Galdino']
let vetorDouble = [1.1, 2.2, 3.3, 4.4]

function concatenar (...args) {
    resultado = []
    for(let i = 0; i<arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}

console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorDouble, vetorString))