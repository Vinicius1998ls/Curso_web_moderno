let notas = [9.5, 4.3, 2.1 ,8.7, 6.2, 3.9]

function mostrarConceitos(notas) {
    for(let i = 0; i < notas.length; i++) {
        if(notas[i] < 4.9) {
            notas[i] = "D"
        } else if(notas[i] < 6.9) {
            notas[i] = "C"
        } else if(notas[i] < 8.9) {
            notas[i] = "B"
        } else {
            notas[i] = "A"
        }
    }
    return notas
}

console.log(mostrarConceitos(notas))