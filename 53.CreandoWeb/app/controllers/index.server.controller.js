exports.render = function(req, res) {
    // res.send('Hola Mundo');

    // Nombre plantilla (archivo sin la extensión: .ejs)
    res.render('index', {
        title: 'Express',
        message: 'Hola Mundo'
    });
};