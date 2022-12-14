function estaEntre(minimo, maximo, numero, inclusivo = false) {
    if(inclusivo) return numero >= minimo && numero <= maximo 
    return numero > minimo && numero < maximo 
}


console.log(estaEntre(10, 50, 100))
console.log(estaEntre(16, 100, 160))
console.log(estaEntre(3, 3, 150))
console.log(estaEntre(3, 3, 150, true))