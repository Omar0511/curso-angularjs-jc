var express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    config = require('./config'),
    session = require('express-session');

module.exports = function() {
    var app = express();

    if (process.env.NODE_ENV === 'dev') {
        app.use( morgan('dev') );
    } else if (process.env.NODE_ENV === 'production') {
        app.use( compress() );
    }

    app.use( bodyParser.urlencoded({ extended: true }) );
    app.use( bodyParser.json() );    
    app.use( methodOverride() );

    app.use(session({
        secret: config.sessionSecret,
        resave: false,
        saveUninitialized: true
    }));

    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    require('../app/routes/index.server.routes.js')(app);

    app.use(express.static('./public'));

    return app;
};