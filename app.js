var express = require('express');
var app = express()
const port = process.env.PORT || 3000

app.get('/', function(req, res) {
    res.send('hello from simple server :)')
})
app.listen(port);