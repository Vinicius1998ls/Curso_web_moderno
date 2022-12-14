function mostarImpares(inicio, fim) {
    if(inicio < 0) {
        inicio = 0
    }

    if(inicio > fim){
        let troca = inicio
        inicio = fim
        fim = troca
    }

    while(inicio < fim && inicio < 100) {
        if(inicio % 2 != 0) {
            console.log(`${inicio}`)            
        }
        inicio++
    }
}

mostarImpares(20, 40)
mostarImpares(90, 110)
mostarImpares(-30, 10)
mostarImpares(60, 40)