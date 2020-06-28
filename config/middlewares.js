const bodyParser = require('body-parser') // Lê facilmente o body de uma requisição
const cors = require('cors') // Habilita a chamada por diferentes URLS

module.exports = app => {
    app.use(bodyParser.json())
    app.use(cors({
        origin: '*'
    }))
}