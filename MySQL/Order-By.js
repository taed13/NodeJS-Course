// dùng để sắp xếp thứ tự mong muốn theo chiều tăng dần hoặc giảm dần

var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testcreatedb'
});

con.connect(function (err) {
    var sql = "SELECT * FROM customers ORDER BY name";

    if (err) throw err;
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});