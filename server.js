const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());

let lastHeaders = {};
let lastBody = {};
let queryParams = {};

app.post('/webhook', (req, res) => {
    lastHeaders = req.headers;
    lastBody = req.body;
    res.status(200).send('Received');
});

app.get('/', (req, res) => {
    queryParams = req.query;
    res.render('index', { queryParams, headers: lastHeaders, body: lastBody });
});

app.post('/', (req, res) => {
    queryParams = req.query;
    res.render('index', { queryParams, headers: lastHeaders, body: lastBody });
});

module.exports = app;

