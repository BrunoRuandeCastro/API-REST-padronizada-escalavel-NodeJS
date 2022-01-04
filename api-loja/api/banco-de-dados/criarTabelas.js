const ModeloTabela = require ('../rotas/fornecedores/ModeloTabelaFornecedor')

ModeloTabela
    .sync()
    .then(() => console.log ('Tabela criada, ok!'))
    .catch(console.log)
