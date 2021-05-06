const express = require('express');
const app = express();

app.get('/test', function(req, res) {
    res.send({hello: 'world'});
    console.log("hello world");
});


app.listen('8080', () => {
    console.log("express for node.js is running...");
})