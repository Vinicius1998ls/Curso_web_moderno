function fatorial(numero) {
    let soma = 1
    for (let i = 1; i <= numero; i++) {
        soma = soma * i 
    }
    console.log(`Fatorial de ${numero} é ${soma}`)
}

fatorial(3)

// Resposta

function fatorial1 (numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial1(numero - 1)
    }
}

console.log(fatorial1(10))