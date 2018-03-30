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
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/makeReservation", function(req, res) {
  res.sendFile(path.join(__dirname, "makeReservation.html"));
});

app.get("/api/tables?", function(req, res) {
    return res.json(tables);
});

app.get("/api/waitlist?", function(req, res) {
    return res.json(waitlist);
});

var count = 0;
app.post("/api/new", function(req, res) {
    count++;
    var newtable = req.body;
    console.log(newtable);
    
    if (count < 6){
        console.log("test" );
        tables.push(newtable);
        res.json(newtable);
    }

    else {
      console.log("test2" );
        waitlist.push(newtable)
        res.json(newtable);
    }
  });
  

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});