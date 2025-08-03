const Student = [
    { name: "nguyen quang vinh", age: 19, class: "cntt1" },
    { name: "nguyen viet trung",age: 18,class: "cntt2"}
]
let studen = Student.forEach(student => {
    console.log(`Xin Chao ${student.name},age:${student.age},class:${student.class}`);
});