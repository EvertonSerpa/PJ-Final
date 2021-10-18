const express = require('express');
const app = express();
app.use(express.json());

const Conn = require('./conn/conn');

Conn("localhost",27017,"listas");

const port = 3000;

const lista = require('./routers/lista.routes')
app.use('/lista',lista);

app.listen(process.env.PORT || port, ()=> {
  console.info(`Servidor rodando na porta: http://localhost:${port}`);
})