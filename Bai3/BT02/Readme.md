# Bài tập 02 - Tạo Web Server với Node.js

## Mô tả yêu cầu
- Sử dụng module `http` trong Node.js để tạo một Web Server lắng nghe tại cổng `3000`.
- Xử lý các tuyến đường (Routing):
  - Đường dẫn `/`: Hiển thị lời chào và mã sinh viên.
  - Đường dẫn `/about`: Hiển thị thông tin giới thiệu bản thân.
  - Các đường dẫn khác: Trả về mã trạng thái HTTP `404` (Không tìm thấy trang).

## Các bước thực hiện
1. Tạo thư mục cấu trúc dự án: `NodeJS/Bai03/Bt02/`
2. Tạo tập tin mã nguồn `bai02.js` chứa logic tạo server.
3. Chạy lệnh khởi động server trên Terminal:
   ```bash
   node bai02.js