// Importa o moongose.
const mongoose = require('mongoose');

// url de conexao = mongodb//servidor/porta/nomebanco
// useNewUrlParser = fala para o mongoose usar o novo sitema de url.
// useUnifieldTopology = Mecanismo de monitoramento do banco de dados

const Conn = () => {
    mongoose.connect('mongodb://localhost:27017/lista', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('MongoDB CONECTADO!')
    }).catch((err) => console.err(err));
}

module.exports = Conn;