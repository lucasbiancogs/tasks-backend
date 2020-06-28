const express = require('express')
const app = express()
const db = require('./config/db')
const consign = require('consign')

/*
O que eu entendi: express é um framework para node
ao requerir o express pode-se criar no app requisições e respostas
no caso de app.get('/') a contrabarra indica que quando for aberta a pasta raiz
ele indica o status(200) de sucesso e envia ('Meu Backend')
entáo se formos no browser e abrirmos a porta localhost:3000
Veremos esse print
*/

consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.db = db

app.get('/', (req, res) => {
    res.status(200).send('Meu Backend')
})

app.listen(3000, () => {
    console.log('Backend executando...')
})