function multiplicar(a, b) {
    total = 0
    for (let i = 0; i < b; i++) {
        total += a
    }
    return total
}

console.log(multiplicar(5, 5))
console.log(multiplicar(0, 7))