function totalNotas(valor) {
    let notasNecessarias = []
    let notasCem = 0
    let notasCinquenta = 0
    let notasVinte = 0
    let notasDez = 0
    let notasCinco = 0
    let notasDois = 0
    let moedasUm = 0

    if (valor >= 100) {
        notasCem = Math.floor(valor / 100.0)
        notasNecessarias.push(`${notasCem} nota(s) de R$: 100. `)
        valor = valor - notasCem * 100
    } 
    if (valor >= 50) {
        notasCinquenta = Math.floor(valor / 50.0)
        notasNecessarias.push(`${notasCinquenta} nota(s) de R$: 50. `)
        valor = valor - notasCinquenta * 50
    }
    if (valor >= 20) {
        notasVinte = Math.floor(valor / 20.0)
        notasNecessarias.push(`${notasVinte} nota(s) de R$: 20. `)
        valor = valor - notasVinte * 20
    }
    if (valor >= 10) {
        notasDez = Math.floor(valor / 10.0)
        notasNecessarias.push(`${notasDez} nota(s) de R$: 10. `)
        valor = valor - notasDez * 10
    }
    if (valor >= 5) {
        notasCinco = Math.floor(valor / 5.0)
        notasNecessarias.push(`${notasCinco} nota(s) de R$: 5. `)
        valor = valor - notasCinco * 5
    }
    if (valor >= 2) {
        notasDois = Math.floor(valor / 2.0)
        notasNecessarias.push(`${notasDois} nota(s) de R$: 2. `)
        valor = valor - notasDois * 2
    }
    if (valor >= 1) {
        moedasUm = Math.floor(valor / 1.0)
        notasNecessarias.push(`${moedasUm} moeda(s) de R$: 1. `)
        valor = valor - moedasUm * 1
    }

    return notasNecessarias
}

console.log(totalNotas(251))
console.log(totalNotas(18))
console.log(totalNotas(2569))

// Resposta

function sacarDinheiro(valorSaque) {
    let contador100 = 0
    let contador50 = 0
    let contador10 = 0
    let contador5 = 0
    let contador1 = 0
    let valorNota = calcularValorNota(valorSaque)
    while (valorSaque >= valorNota) {
        switch (valorNota) {
            case 100:
                valorSaque -= 100
                contador100++
                break
            case 50:
                valorSaque -= 50
                contador50++
                break
            case 10:
                valorSaque -= 10
                contador10++
                break
            case 5:
                valorSaque -= 5
                contador5++
                break
            case 1:
                contador1++
                valorSaque -= 1
                break
        }

        valorNota = calcularValorNota(valorSaque)

    }
    return elaborarResultado(contador100, contador50, contador10, contador5, contador1)
}

function calcularValorNota(valorSaque) {
    if (valorSaque >= 100) {
        return 100
    } else if (valorSaque >= 50) {
        return 50
    } else if (valorSaque >= 10) {
        return 10
    } else if (valorSaque >= 5) {
        return 5
    } else if (valorSaque >= 1) {
        return 1
    }
}

function elaborarResultado(contador100, contador50, contador10, contador5, contador1) {
    let resultado = ''

    if (contador100 > 0) {
        resultado += `${contador100} nota(s) de R$ 100. `
    }

    if (contador50 > 0) {
        resultado += `${contador50} nota(s) de R$ 50. `
    }

    if (contador10 > 0) {
        resultado += `${contador10} nota(s) de R$ 10. `
    }

    if (contador5 > 0) {
        resultado += `${contador5} nota(s) de R$ 5. `
    }

    if (contador1 > 0) {
        resultado += `${contador1} nota(s) de R$ 1. `
    }

    return resultado
}

console.log(sacarDinheiro(153));