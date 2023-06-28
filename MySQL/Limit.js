// giới hạn bản ghi

var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testcreatedb'
});

con.connect(function (err) {
    if (err) throw err;
    // var sql = "SELECT * FROM customers LIMIT 5"; // original sql
    // var sql = "SELECT * FROM customers LIMIT 5 OFFSET 2"; // bắt đầu từ bản ghi thứ 3
    var sql = "SELECT * FROM customers LIMIT 2, 5"; //vẫn là offset nhưng ngắn hơn

    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});