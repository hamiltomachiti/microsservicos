const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const observacoesPorLembretes = {};

app.put('/lembretes/:id/observacoes', (req, res) => {

});

app.get('/lembretes/:id/observacoes', (req, res) => {

});

app.listen(5000, () => {
    console.log('Observacoes. Porta 5000');
});