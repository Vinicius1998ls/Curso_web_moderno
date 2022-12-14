const disponivel = function(fruta1) {
    switch(fruta1) {
        case 'maca':
            return "Não vendemos esta fruta aqui"
        case 'kiwi':
            return "Estamos com escassez de kiwis"
        case 'melancia':
            return "Aqui está, são 3 reais o quilo"
        default:
            return "Não temos"
    }
}

console.log(disponivel('maca'))
console.log(disponivel('kiwi'))
console.log(disponivel('melancia'))
console.log(disponivel('Xbacon'))

// Resposta

function venderFruta (fruta) {
    switch (fruta) {
        case 'maçã':
            console.log('Não vendemos esta fruta aqui.')
            break
        case 'kiwi':
            console.log('Estamos com escassez de kiwi.')
            break
        case 'melancia':
            console.log('Aqui está, custa R$ 3,00 o quilo.')
            break
        default:
            console.log('Erro, fruta inválida.')
    }
}

venderFruta('maçã')
venderFruta('kiwi')
venderFruta('melancia')
venderFruta('alcatra')