function resultadoNota(nota) {
    if (nota > 40) {
        if ((nota+1) % 5 == 0) {
            console.log(`Aprovado, ${nota+1}`)
        } else {
            console.log(`Aprovado, ${nota}`)
        }       
    } else
        console.log(`Reprovado, ${nota}`)
}

resultadoNota(83)

// Resposta

function classificaAluno(nota) {
    let notaCorrigida = arredondar(nota)
    if (notaCorrigida >= 40) {
        console.log(`Aprovado com nota ${notaCorrigida}`);
    } else {
        console.log(`Reprovado com nota ${notaCorrigida}`);
    }
}

function arredondar (nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

classificaAluno(100)
classificaAluno(30)
classificaAluno(38)
classificaAluno(88)
classificaAluno(61)
