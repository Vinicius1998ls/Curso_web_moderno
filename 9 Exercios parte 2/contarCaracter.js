function contarCaracter(caractere, frase) {
    
    var quantidade = 0

    for (var i = 0; i < frase.length; i++) {
        if (frase[i] == caractere) {
            quantidade++
        }
    }

    return quantidade
}

console.log(contarCaracter("r", "A sorte favorece os audazes"))
console.log(contarCaracter("c", "Conhece-te a ti mesmo"))