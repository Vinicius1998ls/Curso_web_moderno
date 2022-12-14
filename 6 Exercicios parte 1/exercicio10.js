function divisivel(numero) {
    if (numero % 3 == 0) {
        return true
    } else {
        return false
    }
}

console.log(divisivel(3))
console.log(divisivel(5))
console.log(divisivel(9))

// Resposta

function verificaNumero (numero) {
    if(numero % 3 == 0){
        return true
    }else{
        return false
    }
}

console.log(verificaNumero(3))
console.log(verificaNumero(2))
console.log(verificaNumero(150))