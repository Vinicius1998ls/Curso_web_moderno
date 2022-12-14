function contarNegativos(numeros) {
    let negativos = 0
    for(let i = 0; i < numeros.length; i++) {
        if(numeros[i] < 0) {
            negativos++
        }
    }
    console.log(`Total de negativos ${negativos}`)
}

let vet = [2, -9, 5, 4, -3, -6, 8, -5]
contarNegativos(vet)