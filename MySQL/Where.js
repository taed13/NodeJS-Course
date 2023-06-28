var mysql = require('mysql');

// tạo kết nối đến MySQL
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testcreatedb'
});

// sử dụng các câu lệnh sql để đọc hoặc ghi vào csdl. điều này còn được gọi là truy vấn tới csdl.
// con.connect(function (err) {
//     if (err) throw err;
//     con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//     });
// });


// con.connect(function (err) {
//     if (err) throw err;
//     con.query("SELECT * FROM customers WHERE address LIKE 'S%'", function (err, result) {
//         if (err) throw err;
//         console.log(result);
//     });
// });

// dùng escape
// con.connect(function (err) {
//     var adr = 'Mountain 21';
//     var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);

//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log(result);
//     });
// });

// dùng placeholder ?
// con.connect(function (err) {
//     var adr = 'Mountain 21';
//     var sql = 'SELECT * FROM customers WHERE address = ?';
//     con.query(sql, [adr], function (err, result) {
//         if (err) throw err;
//         console.log(result);
//     });
// });

// dùng nhiều placeholder ? ? ? 
con.connect(function (err) {
    var name = 'Amy';
    var adr = 'Mountain 21';
    var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
    con.query(sql, [name, adr], function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});
