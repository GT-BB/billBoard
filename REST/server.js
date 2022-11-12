// Create express app
var express = require("express")
var app = express()
var db = require("./database.js")
var fs = require('fs')

// Server port
var HTTP_PORT = 8000 
// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});
// Root endpoint
app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

app.get("/api/users", (req, res, next) => {
    var sql = "SELECT * FROM procedures INNER JOIN entries ON procedures.proc_id = entries.proc_id;"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }

        res.json({
            "message":"success",
            "data":rows
        })

        dict = {"data": rows}
        console.log(dict)
        var dictstring = JSON.stringify(dict)
        fs.writeFile("../Front/jsonFiles/set1.json", dictstring, function(err, result) {
            if(err) console.log('error', err);
        });

      });
});

// Insert here other API endpoints

// Default response for any other request
app.use(function(req, res){
    res.status(404);
});

// SELECT * FROM entries Old code to select data
/*"ALTER TABLE procedures"
"CREATE TABLE procedures"
"CREATE TABLE procedures_short (proc_id INTEGER PRIMARY KEY, name TEXT NOT NULL);"
"INSERT INTO procedures_short ("*/
