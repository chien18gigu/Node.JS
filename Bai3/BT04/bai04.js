const { MongoClient } = require('mongodb');

// Đường dẫn kết nối MongoDB cục bộ
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

// Tên database theo yêu cầu
const dbName = 'qlsinhvien';

async function main() {
    try {
        // 1. Kết nối tới MongoDB đang chạy trên máy
        await client.connect();
        console.log('Kết nối MongoDB thành công!');

        // 2. Sử dụng database qlsinhvien và collection students
        const db = client.db(dbName);
        const collection = db.collection('students');

        // 3. Thêm ít nhất 3 sinh viên bằng insertMany()
        const danhSachSinhVien = [
            { masv: 'SV001', hoten: 'Lê Anh Thư', tuoi: 20, diem: 8.5 },
            { masv: 'SV002', hoten: 'Nguyễn Văn An', tuoi: 21, diem: 7.8 },
            { masv: 'SV003', hoten: 'Trần Thị Bình', tuoi: 19, diem: 9.2 }
        ];

        const insertResult = await collection.insertMany(danhSachSinhVien);
        console.log(`Đã thêm thành công ${insertResult.insertedCount} sinh viên.`);

        // 4. Sử dụng find() hiển thị danh sách sinh viên
        const studentsList = await collection.find({}).toArray();
        console.log('Danh sách sinh viên trong collection students:');
        console.log(studentsList);

    } catch (error) {
        console.error('Đã xảy ra lỗi:', error);
    } finally {
        // 5. Đóng kết nối sau khi hoàn thành
        await client.close();
        console.log('Đã đóng kết nối MongoDB.');
    }
}

main();