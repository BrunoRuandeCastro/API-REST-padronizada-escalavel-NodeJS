const tabelaFornecedor = require('./tabelaFornecedor')

class Fornecedor {
    constructor({ id, empresa, email, categoria, dataCriacao, dataAtualizacao, versao }) {
        this.id = id
        this.empresa = empresa
        this.email = email
        this.categoria = categoria
        this.dataCriacao = dataCriacao
        this.dataAtualizacao = dataAtualizacao
        this.versao = versao
    }
async criar() {
    const resultados = await tabelaFornecedor.inserir({
        empresa: this.empresa,
        email: this.email,
        categoria: this.categoria
    })
    this.id = resultados.id
    this.versao = resultados.versao
    this.dataCriacao = resultados.dataCriacao
    this.dataAtualizacao = resultados.dataAtualizacao
}
}


module.exports = Fornecedor