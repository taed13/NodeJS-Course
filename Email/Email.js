var nodemailer = require('nodemailer');

// tạo 1 đối tượng transporter để gửi email
var transporter = nodemailer.createTransport({
    // dùng dịch vụ email của Gmail
    service: 'gmail',
    // cung cấp thông tin xác thực để đăng nhập vào tài khoản Gmail của bạn
    auth: {
        user: 'tiendatpot@gmail.com',
        pass: 'xvfrfvuwepoukwds'
    }
});

// thiết lập các tuỳ chọn email
var mailOptions = {
    from: 'tiendatpot@gmail.com',
    to: 'luongduthichatdoi@gmail.com, nonoelep@gmail.com',
    subject: 'Sending Email using Node.js',
    html: '<h1>Welcome</h1><p>That was easy!</p>'
};

// gửi email bằng phương thức sendMail của transporter
transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});