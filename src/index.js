const express = require("express");
const app = express();
const path = require('path');

app.use(express.static(__dirname+'/public'));

app.get("/", function(_req, res) {
    res.sendFile(path.join(__dirname, "../views", '/index.html'));
})

app.listen(3000, function() {});
