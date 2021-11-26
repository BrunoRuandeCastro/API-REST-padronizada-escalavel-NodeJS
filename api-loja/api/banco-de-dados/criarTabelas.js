const ModeloTabela = require ('../rotas/fornecedores/modeloTabelaFornecedor')

ModeloTabela
    .sync()
    .then(() => console.log ('Tabela criada, ok!'))
    .catch(console.log)
