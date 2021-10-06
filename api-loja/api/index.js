const bodyParser = require('body-parser')
app.use (bodyParser.json()) 
const express = require ('express')
const app = express()
const config = require ('config')


app.listen(config.pet('api.porta'), () => console.log ('API rodando'))