const contadorA = require('./istanciaUnica')
const contadorB = require('./istanciaUnica')

const contadorC = require('./istanciaNova')()
const contadorD = require('./istanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)