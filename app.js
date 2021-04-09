const express = require('express');
const path = require('path')

const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public'));

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, "views"))

app.get('/', function(req, res) {
    res.render('index')
})
app.listen(port);