function contarPlavras(frase) {
    const palavras = frase.split(" ") // separou as palavras e colocou dentro de um "array"
    //console.log(palavras)
    return palavras.length // contou quantos elementos possui o "array"
}

console.log(contarPlavras("Sou uma frase"))
console.log(contarPlavras("Me divirto aprendendo a programar"))