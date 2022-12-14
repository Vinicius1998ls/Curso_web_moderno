const arrBase = [
    {a: 2, b: 2},
    {a: 1, b: 2},
    {a: 5, b: 2},
    {a: 1, b: 2},
    {a: 10, b: 2}
]

const elementosFiltrados = arrBase.filter(el => el.a > 2)

console.log(elementosFiltrados)

const encontrados = arrBase.find(el => el.a == 10)

console.log(encontrados)

const forEach = arrBase.forEach(el => console.log(`a: ${el.a}, b: ${el.b}`))

const mapeado = arrBase.map(el => el.a += 1)

console.log(mapeado)

const reduzir = arrBase.reduce((acc, curr) => acc = acc + curr.a, 0)

console.log(reduzir)