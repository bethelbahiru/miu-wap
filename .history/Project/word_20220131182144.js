const mysql = require('mysql');

var dictionary = function(word) {

    var sql = 'SELECT * FROM entries WHERE address = ' + mysql.escape(word);

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root"
      });
    
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });



}