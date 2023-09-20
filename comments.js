// Create web server

// Import module
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

// Create app
var app = express();

// Set port
app.set('port', 8080);

// Set view engine
app.set('view engine', 'ejs');

// Set view path
app.set('views', path.join(__dirname, 'views'));

// Set body parser
app.use(bodyParser.urlencoded({ extended: false }));

// Set static path
app.use(express.static(path.join(__dirname, 'public')));

// Set data
var data = [
    {
        name: 'Tung',
        comment: 'Hello'
    },
    {
        name: 'Tung',
        comment: 'Hello'
    },
    {
        name: 'Tung',
        comment: 'Hello'
    }
];

// Get home page
app.get('/', (req, res) => {
    res.render('index', {
        data: data
    });
});

// Post comment
app.post('/', (req, res) => {
    data.push({
        name: req.body.name,
        comment: req.body.comment
    });
    res.render('index', {
        data: data
    });
});

// Listen port
app.listen(app.get('port'), () => {
    console.log('Server is running at port ' + app.get('port'));
});