function removerPropriedade(objeto, chave) {
    delete objeto[chave]
    return objeto
}

console.log(removerPropriedade({a: 1, b: 2}, "a"))
console.log(removerPropriedade({
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
}, "descricao"))