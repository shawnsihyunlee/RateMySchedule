
const parse = require('../client/src/schedule_parser');
const express = require('express');
const app = express();
const fs = require("fs")
const path = require("path")
const PORT = 1234;
const schedule = require('./routes/schedule')
// app.use(express.static("public"));

app.use("/schedule", schedule);

app.get("/", (req, res) => {
    
})

app.listen(PORT, function () {
    console.log("I'm Listening")
    console.log("Server started on port " + parseInt(PORT));
})

