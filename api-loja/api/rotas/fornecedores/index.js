const roteador = require ('express').Rounter()

roteador.use('/', (requisicao, resposta)=>{
    resposta.send('Está Ok.')
})
module.exports = roteador