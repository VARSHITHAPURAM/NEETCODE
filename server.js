const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("HELLO WORLD");
})

app.get("/name", function(req, res){
    res.send("HELLO VARSHITHA");
})

app.listen(3000, function(){
    console.log("SERVER running in http://localhost:3000")
})