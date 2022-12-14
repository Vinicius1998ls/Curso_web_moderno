function calcularCrescimento1(altura1, taxaCrescimento1, altura2, taxaCrescimento2) {
    totalAnos = 0
    if (altura1 < altura2) {
        if (taxaCrescimento1 > taxaCrescimento2) {
            while (altura1 < altura2) {
                altura1 = altura1 * taxaCrescimento1
                altura2 = altura2 * taxaCrescimento2
                totalAnos++
            }
            console.log('A primeira criança é a menor e passara a segunda criança em', totalAnos, 'anos')
        } else {
            console.log('Primeira criança menor')
        }     

    } else if (altura1 > altura2) {
        if (taxaCrescimento2 > taxaCrescimento1) {
            while (altura2 < altura1) {
                altura1 = altura1 * taxaCrescimento1
                altura2 = altura2 * taxaCrescimento2
                totalAnos++
            }
            console.log('A segunda criança é a menor e passara a primeira criança em', totalAnos, 'anos')
        } else {
            console.log('Segunda criança menor')
        }   

    } else {
        console.log('As crianças tem mesmo tamanho')
    }
}

calcularCrescimento1(145, 1.03, 145, 1.01)
calcularCrescimento1(135, 1.03, 145, 1.01)
calcularCrescimento1(135, 1.03, 145, 1.31)
calcularCrescimento1(155, 1.03, 145, 1.08)
calcularCrescimento1(155, 1.03, 145, 1.02)

// Resposta

function calcularCrescimento2(altura1, taxa1, altura2, taxa2) {
    if(altura1 == altura2){
        if (taxa1 > taxa2) {
            return 'A criança 1 ultrapassará a criança 2 em 1 ano.'
        } else if(taxa1 < taxa2) {
            return 'A criança 2 ultrapassará a criança 1 em 1 ano.'
        }else{
            return 'As crianças tem igual altura e crescimento.'
        }
    } else {
        if (altura1 > altura2) {
            if(taxa1 >= taxa2){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return `A criança menor ultrapassará a maior em ${calcularTempo(altura2, taxa2, altura1, taxa1)} anos` 
            }
        } else {
            if(taxa2 >= taxa1){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return `A criança menor ultrapassará a maior em ${calcularTempo(altura1, taxa1, altura2, taxa2)} anos` 
            }
        }
    }
}

function calcularTempo(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior){
    let qtdAnos = 0
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtdAnos++
    }
    //console.log(qtdAnos)
    return qtdAnos
}

console.log(calcularCrescimento2(150, 2, 130, 4));