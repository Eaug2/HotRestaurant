var express = require("express");
var bodyParser =require("body-parser")
var path = require("path")

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var tables = [];

var waitlist = [];

app.get("/", function(req, res) {
    res.send("Listening at PORT 3000");
});

app.get("/api/:table?", function(req, res) {
    var chosen = req.params.tables;
  
    if (chosen) {
      console.log(chosen);
  
      for (var i = 0; i < tables.length; i++) {
        if (chosen === tables[i].routeName) {
          return res.json(tables[i]);
        }
      }
      return res.json(false);
    }
    return res.json(tables);
});

app.get("/api/:waitlist?", function(req, res) {
    var chosen = req.params.waitlist;
  
    if (chosen) {
      console.log(chosen);
  
      for (var i = 0; i < waitlist.length; i++) {
        if (chosen === waitlist[i].routeName) {
          return res.json(waitlist[i]);
        }
      }
      return res.json(false);
    }
    return res.json(waitlist);
});

count = 0;
app.post("/api/new", function(req, res) {
    count++;
    var newtable = req.body;
    console.log(newtable);
    
    if (count > 5){
        tables.push(newtable);
        res.json(newtable);
    }
    else {
        waitlist.push(newtable)
        res.json(newtable);
    }
  });
  

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});