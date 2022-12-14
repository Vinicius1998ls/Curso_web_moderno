function progressaoAritmetica(n, a1, r) {
    let termos = []
    for(let i = 0; i < n; i++) {
        termos[i] = a1 + (r * i)
    }

    let somaTermos = 0
    for (i = 0; i < termos.length; i++){
        somaTermos += termos[i]
    }

    return `Termos ${termos}, soma dos termos ${somaTermos}`
}

function progressaoGeometrica(n, a1, r) {
    let termos = []
    termos[0] = a1
    for(let i = 1; i < n; i++) {
        termos[i] = termos[i-1] * r
    }

    let somaTermos = 0
    for (i = 0; i < termos.length; i++){
        somaTermos += termos[i]
    }

    return `Termos ${termos}, soma dos termos ${somaTermos}`
}

console.log(progressaoAritmetica(6, 4, 2))
console.log(progressaoAritmetica(4, 1, 4))
console.log(progressaoGeometrica(5, 1, 3))
console.log(progressaoGeometrica(7, 2, 2))