const http = require('http');

// Hàm tạo khung HTML chung có gắn CSS cơ bản, đẹp mắt
function renderHTML(title, content) {
    return `
    <!DOCTYPE html>
    <html lang="vi">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #333;
            }
            .card {
                background: #ffffff;
                padding: 40px;
                border-radius: 16px;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
                text-align: center;
                max-width: 500px;
                width: 90%;
            }
            h1 {
                color: #4a3f85;
                margin-bottom: 15px;
                font-size: 24px;
            }
            p {
                color: #555;
                font-size: 16px;
                margin-bottom: 25px;
                line-height: 1.5;
            }
            .nav-links {
                display: flex;
                justify-content: center;
                gap: 15px;
            }
            a {
                text-decoration: none;
                background: #667eea;
                color: white;
                padding: 10px 20px;
                border-radius: 8px;
                font-weight: 600;
                transition: background 0.3s ease;
            }
            a:hover {
                background: #5563c1;
            }
            .error-code {
                font-size: 72px;
                font-weight: bold;
                color: #ff6b6b;
                margin-bottom: 10px;
            }
        </style>
    </head>
    <body>
        <div class="card">
            ${content}
        </div>
    </body>
    </html>
    `;
}

// Khởi tạo Web Server sử dụng module http
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    if (req.url === '/') {
        res.writeHead(200);
        const content = `
            <h1>Chào mừng bạn đến với Web Server của A Chiến!</h1>
            <p>Mã sinh viên: <strong>CDCNTT18B04</strong></p>
            <div class="nav-links">
                <a href="/about">Xem Giới Thiệu</a>
            </div>
        `;
        res.end(renderHTML('Trang Chủ - A Chiến', content));
    } 
    else if (req.url === '/about') {
        res.writeHead(200);
        const content = `
            <h1>Giới thiệu bản thân</h1>
            <p>Họ và tên: <strong>A Chiến</strong><br>
               Lớp: <strong>CĐ-CNTT18B</strong><br>
               Chuyên ngành: Phát triển phần mềm và xây dựng ứng dụng web.</p>
            <div class="nav-links">
                <a href="/">Về Trang Chủ</a>
            </div>
        `;
        res.end(renderHTML('Giới Thiệu - A Chiến', content));
    } 
    else {
        res.writeHead(404);
        const content = `
            <div class="error-code">404</div>
            <h1>Không tìm thấy trang</h1>
            <p>Đường dẫn bạn vừa truy cập không tồn tại trên hệ thống.</p>
            <div class="nav-links">
                <a href="/">Về Trang Chủ</a>
            </div>
        `;
        res.end(renderHTML('Lỗi 404 - Không tìm thấy', content));
    }
});

// Lắng nghe tại cổng 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server đang chạy tại: http://localhost:${PORT}`);
});