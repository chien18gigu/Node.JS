const fs = require('fs');

const fileName = 'thongtin.txt';

console.log('=== BẮT ĐẦU THỰC THI THAO TÁC FILE SYSTEM ===\n');

// 1. Tạo tập tin thongtin.txt chứa họ tên và mã sinh viên
const initialContent = 'Họ và tên: A Chiến\nMã sinh viên: CDCNTT18B04\n';
fs.writeFileSync(fileName, initialContent, 'utf-8');
console.log(`[Bước 1] Đã tạo thành công tập tin '${fileName}' với thông tin ban đầu.`);

// 2. Đọc và hiển thị nội dung tập tin lên Terminal lần 1
console.log('\n[Bước 2] Đọc nội dung tập tin ban đầu:');
const firstRead = fs.readFileSync(fileName, 'utf-8');
console.log(firstRead);

// 3. Ghi nối thêm tên lớp vào cuối tập tin bằng appendFile()
const appendContent = 'Lớp: CĐ-CNTT18B\n';
fs.appendFile(fileName, appendContent, 'utf-8', (err) => {
    if (err) throw err;
    console.log('[Bước 3] Đã ghi nối thêm tên lớp vào cuối tập tin thành công.');

    // 4. Đọc lại tập tin để chứng minh nội dung đã được cập nhật
    console.log('\n[Bước 4] Đọc lại nội dung tập tin sau khi cập nhật:');
    const updatedRead = fs.readFileSync(fileName, 'utf-8');
    console.log(updatedRead);
    console.log('=== HOÀN TẤT THAO TÁC ===');
});