const anonimo = process.argv.indexOf('-a') !== -1
// console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala Anônimo!\n') // Printa na tela
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ') 
    process.stdin.on('data', data => {                   // Possibilita que o usuario digite
        //const nome = data.toString().replace('\n', '')
        const nome = data.toString().replace('\r\n', '')

        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}