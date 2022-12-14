function calcularMedia(numeros) {
    let soma = numeros[0]
    let divisor = 1 /* Como soma já recebe um valor do vetor fora da estrutura FOR,
    é necessario que o divisor comece com 1 para que conte todos os numeros dentro do vetor */
    for(let i = 1; i < numeros.length; i++) {
        soma = soma + numeros[i]
        divisor++
    }
    return soma / divisor
}

let vet = [2, 4, 6, 3, 1, 7, 20]
console.log(calcularMedia(vet).toFixed(2))