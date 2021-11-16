const express = require ('express')
const app = express()
const bodyParser = require('body-parser')
const config = require ('config')

app.use(bodyParser.json())

const roteador = require ('./rotas/fonecedores')
app.use ('/api/fonercedores', roteador)

app.listen(config.get('api.porta'), () => console.log ('API rodando'))