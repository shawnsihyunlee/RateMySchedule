
var express = require('express');
var app = express();
var fs = require('fs')

app.get('/', function (request, response) {
    var text = fs.readFileSync("./men.text");
    var string = text.toString('utf-8')
  
    var textByLine = string.split("\n")
    console.log(textByLine);
    response.send(textByLine);
  });