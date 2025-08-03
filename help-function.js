function getStudentById(studentList, id) {
    return studentList.find(sv => sv.id === id) || null;
}

function getTopStudents(studentList) {
    let max = Math.max(...studentList.map(sv => sv.getAverage()));
    return studentList.filter(sv => sv.getAverage() === max);
}

function getClassAverage(studentList) {
    let sum = 0;
    for (let sv of studentList) sum += sv.getAverage();
    return sum / studentList.length;
}

function getStudentsByScoreRange(studentList, min, max) {
    return studentList.filter(sv => {
        let avg = sv.getAverage();
        return avg >= min && avg <= max;
    });
}

function sortStudentsByName(studentList) {
    return [...studentList].sort((a, b) => a.name.localeCompare(b.name));
}

export {
    getStudentById,
    getTopStudents,
    getClassAverage,
    getStudentsByScoreRange,
    sortStudentsByName
};
