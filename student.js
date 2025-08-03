import {
    getStudentById,
    getTopStudents,
    getClassAverage,
    getStudentsByScoreRange,
    sortStudentsByName
} from './help-function.js';

class Student {
    constructor(id, name, age, scores) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.scores = scores;
    }

    getAverage() {
        return this.scores.reduce((a, b) => a + b, 0) / this.scores.length;
    }
}

const studentList = [
    new Student("S001", "nguyen quang vinh", 20, [8, 7, 9]),
    new Student("S002", "dinh dinh thanh", 21, [9, 9, 10]),
    new Student("S003", "nguyen manh hung", 19, [6, 7, 6]),
    new Student("S004", "tran dang viet", 22, [7, 8, 7]),
    new Student("S005", "nguyen thac hung", 20, [9, 8, 9])
];

console.log("Sinh vien theo ID:", getStudentById(studentList, "S002"));
console.log("Sinh vien gioi nhat:", getTopStudents(studentList));
console.log("Diem trung binh lop:", getClassAverage(studentList).toFixed(2));
console.log("Sinh vien diem TB tu 7 den 8:", getStudentsByScoreRange(studentList, 7, 8));
console.log("Danh sach sap xep theo ten:", sortStudentsByName(studentList));

export { Student, studentList };
