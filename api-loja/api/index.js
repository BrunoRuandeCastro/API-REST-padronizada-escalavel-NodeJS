const bodyParser = require('body-parser')
const express = require ('express')
const app = express()
const config = require ('config')

app.use (bodyParser.json()) 

const roteador = require ('./rotas/fornecedores')
app.use('/api/fornecedores', roteador)

app.listen(config.get ('api.porta'), () => console.log ('API rodando'))