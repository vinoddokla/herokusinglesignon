const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');

app.get('/', function(req, res) {
    res.render(path.join(__dirname, 'www/index'));
});

app.get('/logout', function(req, res) {
    res.render(path.join(__dirname, 'www/index'));
});

app.post('/home', function(req, res) {
    res.render(path.join(__dirname, 'www/home'));
});

app.post('/', function(req, res) {
    console.log(req.body);
    res.send(req.body);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));