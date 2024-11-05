const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Kết nối đến cơ sở dữ liệu
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'payment_db',
});

// Kết nối đến MySQL
db.connect(err => {
  if (err) {
    console.error('Kết nối đến cơ sở dữ liệu thất bại:', err);
    return;
  }
  console.log('Kết nối đến cơ sở dữ liệu thành công!');
});

// API để lưu thông tin thanh toán
app.post('/api/payment', (req, res) => {
  const { paymentMethod, cardNumber, cardHolderName, expiryDate, bank, accountNumber, productName, productPrice } = req.body;

  const sql = 'INSERT INTO payments (payment_method, card_number, card_holder_name, expiry_date, bank, account_number, product_name, product_price) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [paymentMethod, cardNumber, cardHolderName, expiryDate, bank, accountNumber, productName, productPrice];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Lỗi khi lưu thông tin thanh toán:', err);
      return res.status(500).json({ error: 'Có lỗi xảy ra, vui lòng thử lại.' });
    }
    res.status(201).json({ message: 'Thanh toán thành công!', paymentId: result.insertId });
  });
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server đang chạy trên http://localhost:${PORT}`);
});
