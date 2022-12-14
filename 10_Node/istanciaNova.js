// Uma factory retorna um novo objero
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}