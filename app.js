
var express = require('express');
var app = express();
var path = require('path');
//set configuration
app.set('trust proxy', true);
app.set('case sensitive routing', true);
app.set('strict routing', true);
//set view-engine
app.set('views', path.join(__dirname, './views/'));
app.set('view engine', 'ejs');
//set middleware
app.use(express.static(path.join(__dirname, './public')));
app.get('/', function (req, res) {
    res.render("index");
});
var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
    var listenport = server.address().port;
    console.log("Server is listening at port" + port);
});
