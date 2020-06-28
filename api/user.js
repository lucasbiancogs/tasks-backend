const bcrypt = require('bcrypt-nodejs')

/*
A função obterHash toma uma requisição do corpo crua e insere um hash
assim ao criar a nova linha no banco de dados ele insere o valor criptografado
*/

module.exports = app => {
    const obterHash = (password, callback) => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, null, (err, hash) => {
                callback(hash)
            })
        })
    }

    const save = (req, res) => {
        obterHash(req.body.password, hash => {
            const password = hash

            app.db('users')
                .insert({
                    name: req.body.name,
                    email: req.body.email.toLowerCase(),
                    password })
                .then(_ => res.status(204).send())
                .catch(err => res.status(400).json(err))
        })
    }

    return { save }
}