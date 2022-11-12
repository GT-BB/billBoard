var express = require('express');
var router = express.Router();

/*const alertBox = function (req, res, next) {
  alert("You have successfully submitted your data!");
  next()
}

router.use(alertBox) */

router.post('/', function(req, res, next) {
  var data = req.body;
  var Procedure = Number(data.Procedure);
  var Cost = Number(data.Cost);
  var State = data.State;
  var Gender = data.Gender;
  var Age = Number(data.Age);

  var output = [Procedure, Cost, State, Gender, Age]

  const sqlite3 = require('sqlite3').verbose();
  let db = new sqlite3.Database("data.db");

  db.run('INSERT INTO entries VALUES (NULL, ?, datetime("now", "localtime"), ?, ?, ?, ?)', [Procedure, Cost, State, Gender, Age]);

  db.close();
  bread = fetch("http://127.0.0.1:8000/api/users") // Might remove if doesn't work
  res.redirect("http://127.0.0.1:5501/Front/website/html/post.html")
  
});

module.exports = router;
