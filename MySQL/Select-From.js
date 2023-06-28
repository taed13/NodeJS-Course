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
//     con.query("SELECT * FROM customers", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//     });
// });

// chọn cột
con.connect(function (err) {
    if (err) throw err;
    // result là một mảng các đối tượng, mỗi đối tượng là một hàng trong bảng
    // fields trả về thông tin của 1 trường trong bảng
    con.query("SELECT name, address FROM customers", function (err, result, fields) {
        if (err) throw err;
        console.log(fields[0].name);
    });
});