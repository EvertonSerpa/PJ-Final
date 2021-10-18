const express = require('express');
const router = express.Router();
const Lista = require('../models/lista')

router.post("/add", async (req, res) => {
    await Lista.create(req.body)
    .then(() => {
        res.status(200).send("Lista adicionada com sucesso!");
    }).catch((err) => {
        res.status(400).send("Algo errado ao criar a lista, tente novamente.");
        console.error(err);
    })
});

router.get("/", async (req, res) => {
    await Lista.find({})
    .then((lista) => {
        res.status(200).send(lista);
    })
    .catch((err) => {
        res.status(400).send("Algo errado com a lista, tente novamente.");
        console.log(err);
    })
});

router.get("/:id", async (req, res) => {
    await Lista.find({_id : req.params.id})
    .then((lista) => {
        res.status(200).send(lista);
    })
    .catch((err) => {
        res.status(400).send("Algo errado com o ID, tente novamente");
        console.log(err);
    })
});

router.put("/update/:id", async (req, res) => {
    await Lista.updateOne({ _id : req.params.id }, req.body)
    .then(() => {
        res.status(200).send("Atualizado com sucesso");
    })
    .catch((err) => {
        res.status(400).send("Algo errado com a ID, tente novamente");
        console.log(err);
    });
});

router.delete("/delete/:id", async (req, res) => {
    await Lista.deleteOne({_id : req.params.id})
    .then(() => {
        res.status(200).send("Lista deletada com sucesso!");
    })
    .catch((err) => {
        res.status(400).send("Erro ao deletar, tente novamente");
        console.log(err);
    });
});

module.exports = router;