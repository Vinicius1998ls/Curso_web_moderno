function ajusteSalarial(plano, salario) {
    let novoSalario = 0
    switch(plano) {
        case 'a':
            novoSalario = salario + (salario / 100 * 10)
            console.log('Novo salario R$:', novoSalario.toFixed(2))
            break
        case 'b':
            novoSalario = salario + (salario / 100 * 15)
            console.log('Novo salario R$:', novoSalario.toFixed(2))
            break
        case 'c':
            novoSalario = salario + (salario / 100 * 20)
            console.log('Novo salario R$:', novoSalario.toFixed(2))
            break
        default:
            console.log("o plano é inválido")
            break
    }
}

ajusteSalarial('a', 1200)
ajusteSalarial('c', 1850)
ajusteSalarial('b', 2250.20)
ajusteSalarial('f', 5000)

// Resposta

function calcularReajuste(plano, salarioAtual) {
    switch (plano) {
        case 'A':
            return salarioAtual * 1.1
        case 'B':
            return salarioAtual * 1.15
        case 'C':
            return salarioAtual * 1.2
        default:
            return 'Plano inválido.'
    }
}

console.log(calcularReajuste('A', 1000));
console.log(calcularReajuste('B', 1000));
console.log(calcularReajuste('C', 1000));
console.log(calcularReajuste('D', 1000));