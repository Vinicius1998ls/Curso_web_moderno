function repetir(a, b) {
    let resultado = []
    for (let i = 0; i < b; i++) {
        resultado[i] = a
    }
    return resultado
}

console.log(repetir("Codigo", 2))
console.log(repetir(7, 3))