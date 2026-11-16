const { MongoClient } = require('mongodb');

// Đường dẫn kết nối MongoDB cục bộ
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

// Tên database và collection đã dùng ở Bài 4
const dbName = 'qlsinhvien';

async function main() {
    try {
        // 1. Kết nối tới MongoDB
        await client.connect();
        console.log('Kết nối MongoDB thành công!');

        const db = client.db(dbName);
        const collection = db.collection('students');

        // 2. Tìm các sinh viên có diem >= 7 bằng find() và $gte, sau đó sắp xếp giảm dần bằng sort({ diem: -1 })
        console.log('\n--- 1. Danh sách sinh viên có điểm >= 7 (sắp xếp điểm giảm dần) ---');
        const listGTE7 = await collection.find({ diem: { $gte: 7 } }).sort({ diem: -1 }).toArray();
        console.log(listGTE7);

        // 3. Cập nhật điểm của một sinh viên theo masv (Ví dụ: cập nhật điểm của 'SV001' thành 9.5) bằng updateOne() và $set
        console.log('\n--- 2. Cập nhật điểm cho sinh viên có masv: SV001 thành 9.5 ---');
        const updateResult = await collection.updateOne(
            { masv: 'SV001' },
            { $set: { diem: 9.5 } }
        );
        console.log(`Đã cập nhật thành công ${updateResult.modifiedCount} sinh viên.`);

        // 4. Hiển thị lại toàn bộ thông tin sau cập nhật để kiểm tra kết quả
        console.log('\n--- 3. Danh sách sinh viên sau khi cập nhật ---');
        const updatedList = await collection.find({}).toArray();
        console.log(updatedList);

    } catch (error) {
        console.error('Đã xảy ra lỗi:', error);
    } finally {
        // 5. Đóng kết nối
        await client.close();
        console.log('\nĐã đóng kết nối MongoDB.');
    }
}

main();