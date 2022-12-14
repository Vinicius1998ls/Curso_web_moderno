//let tabela = [ pt1, pt2, pt3, pt4, pt5, pt6, pt7, pt8, pt9 ]

pontuacao = " 10 20 20 8 25 3 0 30 1 "

//console.log(typeof pontuacao)

function melhorPontuacao(pontuacao) {
    let pontos = pontuacao.split(", ")
    let tabela = []
    let melhor = 0
    let pior = 1
    let maiorPontuacao = pontos[0]
    let menorPontuacao = pontos[0]
    for (let i in pontuacao) {
        if (pontos[i] > maiorPontuacao) {
            maiorPontuacao = pontos[i]
            melhor++
        
        }else if (pontos[i] < maiorPontuacao) {
            menorPontuacao = pontos[i]
            pior = i+1;
        }    

    return [melhor, pior]
    }
}

console.log(melhorPontuacao(pontuacao))

// Resposta

let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"
 
 
function avaliaPontuacoes (stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(", ")
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if(pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++
        }else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1;
        }
    }
    return [qtdQuebraDeRecords, piorJogo]
}
 
console.log(avaliaPontuacoes(stringPontuacoes))