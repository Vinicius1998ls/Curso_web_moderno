function comprarCarro(carro) {
    switch(carro) {
        case 'hatch':
            console.log('Compra efetuada com sucesso')
            break
        case 'sedan':
        case 'motocicleta':
        case 'caminhoneta':
            console.log('Tem certeza que não prefere este modelo?')
            break
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui')
    }
}

comprarCarro('motocicleta')
comprarCarro('sedan')
comprarCarro('oninus')
comprarCarro('hatch')

// Resposta

function escolherCarro (modelo) {
    switch (modelo) {
        case 'hatch':
            return 'Compra efetuada com sucesso.'
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            return 'Tem certeza que não prefere este modelo?'
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui.'
    }
}

console.log(escolherCarro('hatch'));
console.log(escolherCarro('motocicleta'));
console.log(escolherCarro('sedan'));
console.log(escolherCarro('caminhonete'));
console.log(escolherCarro('jetski'));