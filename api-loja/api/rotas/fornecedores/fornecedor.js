const TabelaFornecedor = require ('./TabelaFornecedor')
const CampoInvalido = require ('../../erros/CampoInvalido')
const DadosNaoFornecidos = require ('../../erros/DadosNaoFornecidos')

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
    this.validar()
    const resultados = await TabelaFornecedor.inserir({
        empresa: this.empresa,
        email: this.email,
        categoria: this.categoria
    })
        this.id = resultados.id
        this.versao = resultados.versao
        this.dataCriacao = resultados.dataCriacao
        this.dataAtualizacao = resultados.dataAtualizacao
}

async carregar(){
    const encontrado = await TabelaFornecedor.pegarPorId(this.id)
//pegar os valores e assimilar a instancia
    this.empresa = encontrado.empresa
    this.email = encontrado.email
    this.categoria = encontrado.categoria
    this.dataCriacao = encontrado.dataCriacao
    this.dataAtualizacao = encontrado.dataAtualizacao
    this.versao = encontrado.versao
}

    async atualizar(){
//verificação de fornecedor
        await TabelaFornecedor.pegarPorId(this.id)
        const campos = ['empresa', 'email', 'categoria']
        const dadosParaAtualizar = {}

//função para executar em cima de cada item da lista
        campos.forEach((campo) => {
            const valor = this[campo]

            if (typeof valor === 'string' && valor.length > 0) {
                dadosParaAtualizar[campo] = valor
            }
        })

        if (Object.keys(dadosParaAtualizar).length === 0){
            throw new DadosNaoFornecidos()
        }
        await TabelaFornecedor.atualizar(this.id, dadosParaAtualizar)
    }
    remover () {
        return TabelaFornecedor.remover(this.id)
    }

    validar (){
        const campos = ['empresa', 'email','categoria']

        campos.forEach(campo => {
            const valor = this[campo]

            if (typeof valor !== 'string' || valor.length === 0){
                throw new CampoInvalido (campo)
            }
        })
    }
}

module.exports = Fornecedor