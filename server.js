const http = require('http');

// Tạo HTTP server lắng nghe ở cổng 3000
const server = http.createServer((req, res) => {
  // Thiết lập header trả về dạng HTML và hỗ trợ tiếng Việt (utf-8)
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  
  // Nội dung trang HTML chỉ chứa họ và tên A Chiến
  res.end(`
    <!DOCTYPE html>
    <html lang="vi">
    <head>
        <meta charset="UTF-8">
        <title>Bài thực hành Node.js</title>
        <style>
            body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
            h1 { color: #2c3e50; }
            p { font-size: 18px; color: #34495e; }
        </style>
    </head>
    <body>
        <h1>Ứng dụng HTTP Server đầu tiên với Node.js thuần</h1>
        <p><strong>Họ và tên:</strong> A Chiến</p>
    </body>
    </html>
  `);
});

// Khởi động server trên cổng 3000
server.listen(3000, () => {
  console.log('Server đang chạy tại địa chỉ: http://localhost:3000');
});