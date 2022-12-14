function tipoTriangulo(a, b, c) {
    if (a == b && a == c) {
        console.log('Equiláteros')
    } else if (a == b || a == c) {
        console.log('Isósceles')
    } else {
        console.log('Escalenos')
    }
}

tipoTriangulo(3, 3, 3)
tipoTriangulo(1, 4, 1)
tipoTriangulo(1, 5, 3)

// Resposta

function classificaTriangulo (lado1, lado2, lado3) {
    if(lado1 == lado2 && lado2 == lado3){
        return 'Equilátero'
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return 'Isósceles'        
    }else { 
        return 'Escaleno'
    }
}

console.log(classificaTriangulo(2, 2, 2));
console.log(classificaTriangulo(2, 3, 3));
console.log(classificaTriangulo(2, 3, 4));