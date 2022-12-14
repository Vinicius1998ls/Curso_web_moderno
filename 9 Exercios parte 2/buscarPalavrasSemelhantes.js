function buscarPalavrasSemelhantes(inicio, palavras) {
    const resultado = []
    for (let palavra of palavras) 
        if (palavra.includes(inicio))
            resultado.push(palavra)
    return resultado
}

console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]))
console.log(buscarPalavrasSemelhantes("python", ["javascript", "java", "C++"]))