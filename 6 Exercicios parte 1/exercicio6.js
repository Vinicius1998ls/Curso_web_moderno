function jurosSimples(capital, taxa, tempo) {
    juros = capital * taxa * tempo
    montante = juros + capital
    //montante = capital * ((1 + taxa) * tempo)
    return montante
}

function jurosCompostos(capital, taxa, tempo) {
    montante = capital * Math.pow((1 + taxa), tempo)
    return montante
}

console.log("Juros simples", jurosSimples(1200, 0.02, 14))
console.log("Juros compostos", jurosCompostos(1200, 0.02, 14))

// Reposta

function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2));