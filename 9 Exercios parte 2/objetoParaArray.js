function objetoParaArray(objeto) {
    let resultado = []
    for (let chave in objeto) {
        resultado.push([chave, objeto[chave]])
    }
    return resultado
}

console.log(objetoParaArray({
    nome: "Maria",
    profissao: "desenvolvedora de software"
}))

/*function objetoParaArray(objeto) {
    const chaves = Object.keys(objeto)
    const resultado = chaves.map(chave => [chave, objeto[chave]])
    return resultado
}*/

/*function objetoParaArray(objeto) { 
    return Object.entries(objeto) 
}*/