function somarArray(array) {
    let resultado = 0
    for (let i = 0; i < array.length; i++) {
        resultado += array[i]
    }
    return resultado
}

console.log(somarArray([10, 10, 10]))
console.log(somarArray([15, 15, 15, 15]))