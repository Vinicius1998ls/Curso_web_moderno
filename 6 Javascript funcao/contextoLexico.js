const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exerc() {
    const valor = 'Local'
    minhaFuncao()
}

exerc()