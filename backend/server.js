const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');

app.use(cors());
app.use(routes);
app.use('/static', express.static('static'));

app.listen(3001, () => {
    console.log(`Servidor rodando na porta: 3001`);
});