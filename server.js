const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const courseLib = require("./backend/lib/courseLib");

const app = express();
const str = process.env.MONGO_CONNECTION_STRING;
mongoose.set('strictQuery', true);
mongoose.connect(str,async function(err){
    if(err)
        console.error(err);
    else{
        console.log("DB CONNECTED");
        const course = await courseLib.createFirstCourse();
        console.log(course);
        app.listen(3000, function(){
            console.log("SERVER running in http://localhost:3000")
        })
    }
});

app.use(express.static("frontend"))

app.get("/", function(req,res){
    res.sendFile(__dirname + "/frontend/index.html")
})

