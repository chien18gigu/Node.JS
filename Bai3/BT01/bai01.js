// Khai báo lớp Student sử dụng class và constructor
class Student {
    constructor(id, name, age, score) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.score = score;
    }
}

// Khai báo danh sách 5 sinh viên
const students = [
    new Student("CDCNTT01", "Nguyễn Văn An", 20, 8.5),
    new Student("CDCNTT02", "Trần Thị Bình", 21, 4.2),
    new Student("CDCNTT03", "Lê Văn Cường", 20, 6.5),
    new Student("CDCNTT04", "Phạm Thị Dung", 22, 3.8),
    new Student("CDCNTT05", "Hoàng Văn Em", 21, 7.0)
];

// Sử dụng arrow function để lọc sinh viên có điểm từ 5.0 trở lên
const filteredStudents = students.filter(student => student.score >= 5.0);

// Hiển thị kết quả ra Terminal
console.log("=== DANH SÁCH SINH VIÊN ĐẠT ĐIỂM >= 5.0 ===");
console.table(filteredStudents);