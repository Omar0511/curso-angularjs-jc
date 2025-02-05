var express = require('express');
var app = express();

app.use('/', function(req, res) {
    res.set('Hola Mundo');
});

app.listen(3000, function () {
    console.log('Servidor escuchando en http://localhost:3000/');
});

module.exports = app;