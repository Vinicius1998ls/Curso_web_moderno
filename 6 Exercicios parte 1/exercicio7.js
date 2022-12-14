function bhaskara(ax2, bx, c) {
    delta = ax2 ** 2 -4 * bx * c
    if (delta < 0) {
        return console.log("Delta é negativo")
    } else {
        v1 = -bx - Math.sqrt(delta) / 2 * ax2
        v2 = -bx + Math.sqrt(delta) / 2 * ax2

        return v1
    }
}

bhaskara(3, -5, 12)

// Resposta

function bhaskara (ax2, bx, c) {
    let resultados = [] // Declara array vazio
    let delta = (bx ** 2) - (4 * ax2 * c)
    if(delta < 0){
        return "Delta é negativo"
    } 
    let x1 = (-bx + Math.sqrt(delta))/(2*ax2)
    let x2 = (-bx - Math.sqrt(delta))/(2*ax2)
    resultados.push(x1) // coloca valor dentro de array
    resultados.push(x2)
    return resultados   
}

console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))