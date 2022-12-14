const diaSemanal = function (dia) {
    switch (dia) {
        case 1:
        case 7:
        case 8:
        case 14:
        case 15:
        case 21:
        case 22:
        case 28:
        case 29:
            console.log('Fim de semana')
            break
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 23:
        case 24:
        case 25:
        case 26:
        case 27:
        case 30:
        case 31:
            console.log('Dia util')
            break        
        default:
            console.log('Dia inválido')
            break
    }
}

diaSemanal(1)
diaSemanal(17)
diaSemanal(40)
diaSemanal(8)
diaSemanal(6)

// Resposta

function classificaDia(numero) {
    switch (numero) {
        case 1:
            return "Fim de semana"
        case 2:
        case 3:
        case 4:
        case 5:
        case 6: 
            return "Dia útil"
        case 7:
            return "Fim de semana"
        default: 
            return "Dia inválido"
    }
}

console.log(classificaDia(1));
console.log(classificaDia(2));
console.log(classificaDia(3));
console.log(classificaDia(4));
console.log(classificaDia(5));
console.log(classificaDia(6));
console.log(classificaDia(7));
console.log(classificaDia('a'));