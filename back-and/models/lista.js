// Schemas = Estrutura de dados do documento. (tabela/documento)
// Documents = São as linhas das nossas tabelas.
// Model = São construtores que pegam um schema e cria uma instancia de um documento equivalente a um registro de banco de dados relacional.
// Collections = São esquivalente as tabelas no banco de dasos e elas podem conter varios documento JSON.

const mongoose = require('mongoose');

const listaModel = new mongoose.Schema({
    titulo: { type: String, require: true },
    descricao: { type: String, require: true, },
    prioridade: { type: String, require: true },
    status: { type: String, require: true },
    prazo: { type: String, require: true },
    dataCriacao: { type: Date, default: Date.now }
})

// Inicializo o meu model na collection lista com o schema listaModel
const Lista = mongoose.model("lista", listaModel);

module.exports = Lista;