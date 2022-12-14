function notaFinal(codigo, n1, n2, n3) {
    let mediaPonderarda = 0
    if (n1 > n2 && n1 > n3) {
        mediaPonderarda = ((n1 * 4) + (n2 * 3) + (n3 * 3)) / (4 + 3 + 3)
    } else if (n2 > n3) {
        mediaPonderarda = ((n1 * 3) + (n2 * 4) + (n3 * 3)) / (4 + 3 + 3)
    } else {
        mediaPonderarda = ((n1 * 3) + (n2 * 3) + (n3 * 4)) / (4 + 3 + 3)
    }

    if (mediaPonderarda > 5) {
        console.log('Aluno codigo:', codigo, 'Nota:', mediaPonderarda, 'Aprovado')
    } else {
        console.log('Aluno codigo:', codigo, 'Nota:', mediaPonderarda, 'Reprovado')
    }
}

notaFinal(2, 5, 8, 6)
notaFinal(9, 2, 4, 1)

// Resposta

function calcularNotaFinal(codAluno, nota1, nota2, nota3){
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a,b) => a < b ? 1 : -1)

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    console.log(`Código do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}

calcularNotaFinal(123, 2.8, 6, 3.5)